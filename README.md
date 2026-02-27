# HA Timer Card

A custom [Home Assistant](https://www.home-assistant.io/) Lovelace card for interacting with the built-in [`timer`](https://www.home-assistant.io/integrations/timer/) domain. Display countdowns, start/pause/cancel timers, and add time in configurable increments — all from a single, clean card.

> **Note:** This card requires one or more existing `timer` entities in your Home Assistant instance. See [Prerequisites](#prerequisites) below.

<img width="346" height="152" alt="image" src="https://github.com/user-attachments/assets/a6c5c5d0-ff92-4cd8-887f-21922ab81804" />


---

## Features

- Displays real-time countdown (remaining time)
- Visual state indicator: idle / active / paused
- Start, Pause, and Cancel controls
- Configurable time increment buttons (e.g. +1 min, +5 min, +10 min)
- Visual config editor — no YAML required
- Respects Home Assistant theming (CSS custom properties)

---

## Prerequisites

You must have at least one `timer` entity configured in Home Assistant before using this card.

Add a timer via **Settings → Devices & Services → Helpers → Create Helper → Timer**, or define one in `configuration.yaml`:

```yaml
timer:
  my_timer:
    name: "My Timer"
    duration: "00:05:00"
    restore: true
```

---

## Installation

### Via HACS (Recommended)

1. Open HACS in your Home Assistant sidebar.
2. Go to **Frontend**.
3. Click **Explore & Download Repositories** and search for **HA Timer Card**.
4. Click **Download**.
5. Reload your browser.

### Via HACS Custom Repository

1. Open HACS → **Frontend** → three-dot menu → **Custom repositories**.
2. Add `https://github.com/<your-username>/hatimer` with category **Dashboard**.
3. Find and install **HA Timer Card** from the list.
4. Reload your browser.

### Manual Installation

1. Download `hatimer.js` from the [latest release](https://github.com/<your-username>/hatimer/releases/latest).
2. Copy it to `<config>/www/hatimer/hatimer.js`.
3. In Home Assistant, go to **Settings → Dashboards → Resources**.
4. Add a new resource:
   - URL: `/local/hatimer/hatimer.js`
   - Type: `JavaScript module`
5. Reload your browser.

---

## Configuration

Add the card to your dashboard via the visual editor, or paste YAML directly:

```yaml
type: custom:hatimer-card
entity: timer.my_timer
```

### Full Configuration Reference

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | `string` | **required** | The `timer.*` entity ID to control |
| `name` | `string` | Entity's `friendly_name` | Optional display name override |
| `increments` | `number[]` | `[1, 5, 10]` | Time increment buttons in minutes |
| `show_controls` | `boolean` | `true` | Show the Start / Pause / Cancel row |

### Example — Custom Increments

```yaml
type: custom:hatimer-card
entity: timer.cooking_timer
name: "Cooking Timer"
increments:
  - 1
  - 3
  - 5
  - 15
show_controls: true
```

### Example — Display Only (No Controls)

```yaml
type: custom:hatimer-card
entity: timer.laundry
show_controls: false
increments: []
```

---

## Known Limitations

- Adding time to an `idle` timer starts it from the incremented duration.
- The `remaining` attribute is only updated by Home Assistant on state changes (start, pause, cancel) — the displayed countdown is driven by a client-side interval and may drift slightly from the server state.
- Multiple cards pointing to the same entity share the same HA state; controls from any card affect all cards.

---

## License

[MIT](./LICENSE)
