# Architecture: HA Timer Card

This document describes the internal design of the `hatimer` Lovelace card for developers who want to understand, extend, or fork the project.

---

## Component Tree

```
hatimer-card               (main card — hatimer-card.ts)
└── hatimer-card-editor    (config editor — hatimer-card-editor.ts)
```

Both are [Lit](https://lit.dev/) custom elements registered with the browser's Custom Elements registry. Lovelace loads them from the single bundled file `dist/hatimer.js`.

---

## Data Flow

```
Home Assistant
    │
    │  hass object (entity states, services)
    ▼
hatimer-card
    │  set hass(hass) setter
    │  → requestUpdate()
    │
    ▼
render()
    │  reads: hass.states[config.entity]
    │  - state: 'idle' | 'active' | 'paused'
    │  - attributes.remaining: 'HH:MM:SS'
    │  - attributes.duration:  'HH:MM:SS'
    │
    ▼
DOM (LitElement shadow DOM)
    │
    │  User interaction (button click)
    ▼
callService()
    │  hass.callService('timer', 'start' | 'pause' | 'cancel', { entity_id })
    ▼
Home Assistant processes service call
    │  Updates entity state
    ▼
hass object updated → setter fires again → re-render
```

### Why a setter instead of `@property`?

Home Assistant calls the `hass` setter on *every state change across the entire system*, not just changes to the timer entity. Using Lit's reactive `@property()` decorator would trigger a full re-render of the card on every HA event. The setter pattern lets us call `requestUpdate()` only when our specific entity has changed:

```ts
set hass(hass: HomeAssistant) {
  const prevState = this._hass?.states[this.config?.entity ?? ''];
  const nextState = hass.states[this.config?.entity ?? ''];
  this._hass = hass;
  if (prevState !== nextState) {
    this.requestUpdate();
  }
}
```

---

## Timer State Machine

```
         ┌─────────────────────────────┐
         │           idle              │◄──── timer.cancel
         └─────────────────────────────┘
                      │
              timer.start (duration)
                      │
                      ▼
         ┌─────────────────────────────┐
         │          active             │◄──── timer.start (resume)
         └─────────────────────────────┘
            │                    │
       timer.pause         timer fires (elapsed)
            │                    │
            ▼                    ▼
         ┌──────────┐        ┌──────────┐
         │  paused  │        │  (idle)  │
         └──────────┘        └──────────┘
```

Valid service calls per state:

| State | Valid services |
|---|---|
| `idle` | `timer.start` |
| `active` | `timer.pause`, `timer.cancel`, `timer.finish`, `timer.start` (restart/add time) |
| `paused` | `timer.start` (resume), `timer.cancel` |

The card's control buttons are conditionally rendered based on the current state to only show valid actions.

---

## "Add Time" Algorithm

HA's `timer.change` service modifies the configured *total duration*, not the *remaining* time. To correctly add time to a running timer:

```
1. Read attributes.remaining ("HH:MM:SS") — or attributes.duration if idle
2. Parse to total seconds:
      seconds = H*3600 + M*60 + S
3. Add increment (in minutes) converted to seconds:
      newSeconds = seconds + (incrementMinutes * 60)
4. Format back to "HH:MM:SS":
      H = Math.floor(newSeconds / 3600)
      M = Math.floor((newSeconds % 3600) / 60)
      S = newSeconds % 60
5. Call timer.start with the new duration:
      hass.callService('timer', 'start', { entity_id, duration: 'HH:MM:SS' })
```

Using `timer.start` (rather than `timer.change`) has the effect of resetting the countdown to the new value while keeping the timer running. If the timer was paused, this also resumes it.

---

## Client-Side Countdown

HA only sends WebSocket updates to the frontend on state transitions (start, pause, cancel, finish). It does *not* stream the remaining time every second.

To show a live countdown, the card maintains a client-side interval (`setInterval`) that:
1. Fires every 500ms (oversampling to avoid 1-second visual skips)
2. Computes `finishes_at - Date.now()` to get the true remaining time
3. Calls `requestUpdate()` to re-render the display

The interval is started when the timer enters `active` state and cleared when it leaves.

```ts
// Pseudocode
if (state === 'active') {
  this._ticker = setInterval(() => this.requestUpdate(), 500);
} else {
  clearInterval(this._ticker);
}
```

This approach stays accurate even if the HA update is delayed, because it derives time from `finishes_at` (an absolute timestamp) rather than counting down from `remaining`.

---

## Config Editor

The editor (`hatimer-card-editor.ts`) is loaded lazily via `static async getConfigElement()`:

```ts
static async getConfigElement() {
  await import('./hatimer-card-editor');
  return document.createElement('hatimer-card-editor');
}
```

This keeps the initial bundle parse cost low — the editor code is only evaluated when the user opens the card editor in Lovelace.

The editor communicates changes back to Lovelace by firing a `config-changed` CustomEvent:

```ts
fireEvent(this, 'config-changed', { config: newConfig });
```

Lovelace then calls `card.setConfig(newConfig)` on the main card element.

---

## Build Pipeline

```
src/index.ts  (entry point)
    │
    ├── src/hatimer-card.ts
    ├── src/hatimer-card-editor.ts
    ├── src/types.ts
    ├── src/const.ts
    └── src/styles.ts
          │
          ▼
   TypeScript compiler (tsc via @rollup/plugin-typescript)
          │
          ▼
   Rollup bundler
      - @rollup/plugin-node-resolve  (resolves lit from node_modules)
      - @rollup/plugin-commonjs      (CJS interop)
      - @rollup/plugin-terser        (minification, production only)
          │
          ▼
   dist/hatimer.js   (single ES module, ~50–100 KB minified)
          │
          ▼
   HACS delivers to browser
   Browser registers custom elements
   Lovelace renders hatimer-card
```

The output is a standard ES module (`format: 'es'`). Modern browsers and Home Assistant's frontend can consume it directly.

---

## File Reference

| File | Purpose |
|---|---|
| `src/index.ts` | Entry point; registers `window.customCards` |
| `src/hatimer-card.ts` | Main `LitElement` card |
| `src/hatimer-card-editor.ts` | Lovelace config editor element |
| `src/types.ts` | TypeScript interfaces (`TimerCardConfig`, `HATimerAttributes`, `TimerState`) |
| `src/const.ts` | Shared constants (`CARD_TAG`, `CARD_NAME`, `DEFAULT_INCREMENTS`) |
| `src/styles.ts` | Shared CSS template literals |
| `dist/hatimer.js` | Built & committed output |
| `rollup.config.js` | Rollup build configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `hacs.json` | HACS plugin metadata |
| `.github/workflows/validate.yaml` | HACS validation CI |
| `.github/workflows/release.yml` | Release build & asset upload CI |
