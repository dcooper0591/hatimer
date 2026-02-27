import { LitElement, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { cardStyles } from './styles.js';
import { CARD_TAG, DEFAULT_INCREMENTS } from './const.js';
import type { TimerCardConfig, HATimerAttributes, TimerState, HomeAssistant } from './types.js';

@customElement(CARD_TAG)
export class HaTimerCard extends LitElement {
  static styles = cardStyles;

  private _hass!: HomeAssistant;
  private _config!: TimerCardConfig;
  private _ticker: ReturnType<typeof setInterval> | undefined;
  private _userCancelled = false;

  // ── Lovelace card API ────────────────────────────────────────────────────

  static getGridOptions() {
    return { min_columns: 6 };
  }

  static async getConfigElement(): Promise<HTMLElement> {
    await import('./hatimer-card-editor.js');
    return document.createElement('hatimer-card-editor');
  }

  static getStubConfig(_hass: HomeAssistant): TimerCardConfig {
    const timerEntity = Object.keys(_hass.states).find((id) =>
      id.startsWith('timer.')
    );
    return {
      type: `custom:${CARD_TAG}`,
      entity: timerEntity ?? 'timer.my_timer',
    };
  }

  setConfig(config: TimerCardConfig): void {
    if (!config.entity) {
      throw new Error('You must define an entity (timer.*) in your card config.');
    }
    if (!config.entity.startsWith('timer.')) {
      throw new Error(`Entity must be in the timer domain (e.g. timer.my_timer). Got: ${config.entity}`);
    }
    this._config = config;
    this.requestUpdate();
  }

  set hass(hass: HomeAssistant) {
    const entityId = this._config?.entity ?? '';
    const prevState = this._hass?.states[entityId];
    const nextState = hass.states[entityId];
    this._hass = hass;
    if (prevState !== nextState) {
      this._syncTicker(nextState?.state as TimerState | undefined);
      // Detect natural finish: active → idle without the user pressing Cancel
      if (prevState?.state === 'active' && nextState?.state === 'idle') {
        if (this._userCancelled) {
          this._userCancelled = false;
        } else {
          this._sendNotification(nextState.attributes as HATimerAttributes);
        }
      }
      this.requestUpdate();
    }
  }

  // ── Lifecycle ────────────────────────────────────────────────────────────

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopTicker();
  }

  // ── Rendering ────────────────────────────────────────────────────────────

  render() {
    if (!this._config || !this._hass) return nothing;

    const entityId = this._config.entity;
    const stateObj = this._hass.states[entityId];

    if (!stateObj) {
      return html`
        <ha-card>
          <div class="error">Entity not found: <strong>${entityId}</strong></div>
        </ha-card>
      `;
    }

    const attrs = stateObj.attributes as HATimerAttributes;
    const timerState = stateObj.state as TimerState;
    const displayName = this._config.name ?? attrs.friendly_name ?? entityId;
    const increments = this._config.increments ?? DEFAULT_INCREMENTS;
    const showControls = this._config.show_controls !== false;
    const showName = this._config.show_name !== false;
    const showState = this._config.show_state !== false;

    const timeDisplay = this._computeDisplayTime(timerState, attrs);

    return html`
      <ha-card>
        ${showName ? html`<div class="card-header">${displayName}</div>` : nothing}

        <div class="timer-display">
          <div class="timer-time state-${timerState}">${timeDisplay}</div>
          ${showState ? html`<div class="state-badge state-${timerState}">${timerState}</div>` : nothing}
        </div>

        ${increments.length > 0
          ? html`
              <div class="increments">
                ${increments.map(
                  (mins) => html`
                    <button
                      class="increment-btn"
                      @click=${() => this._addTime(mins, timerState, attrs)}
                    >
                      +${mins}m
                    </button>
                  `
                )}
              </div>
            `
          : nothing}

        ${showControls ? this._renderControls(timerState) : nothing}
      </ha-card>
    `;
  }

  private _renderControls(state: TimerState) {
    return html`
      <div class="controls">
        ${state === 'idle'
          ? html`<button class="control-btn btn-start" @click=${this._start}>Start</button>`
          : nothing}
        ${state === 'active'
          ? html`<button class="control-btn btn-pause" @click=${this._pause}>Pause</button>`
          : nothing}
        ${state === 'paused'
          ? html`<button class="control-btn btn-start" @click=${this._resume}>Resume</button>`
          : nothing}
        ${state !== 'idle'
          ? html`<button class="control-btn btn-cancel" @click=${this._cancel}>Cancel</button>`
          : nothing}
      </div>
    `;
  }

  // ── Display time ─────────────────────────────────────────────────────────

  private _computeDisplayTime(state: TimerState, attrs: HATimerAttributes): string {
    if (state === 'active' && attrs.finishes_at) {
      const remainingMs = new Date(attrs.finishes_at).getTime() - Date.now();
      if (remainingMs > 0) {
        return this._secondsToHms(Math.ceil(remainingMs / 1000));
      }
      return '0:00:00';
    }
    if (state === 'paused' && attrs.remaining) {
      return this._formatHms(attrs.remaining);
    }
    // idle — show the configured duration
    return this._formatHms(attrs.duration ?? '0:00:00');
  }

  private _formatHms(hms: string): string {
    // Normalise "H:MM:SS" → always at least "0:00:00"
    const parts = hms.split(':').map(Number);
    while (parts.length < 3) parts.unshift(0);
    const [h, m, s] = parts;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  private _secondsToHms(totalSeconds: number): string {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // ── Add time logic ───────────────────────────────────────────────────────

  private _addTime(minutes: number, state: TimerState, attrs: HATimerAttributes): void {
    let baseSeconds: number;

    if (state === 'active' && attrs.finishes_at) {
      const remainingMs = new Date(attrs.finishes_at).getTime() - Date.now();
      baseSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
    } else if (state === 'paused' && attrs.remaining) {
      baseSeconds = this._hmsToSeconds(attrs.remaining);
    } else {
      // idle — add to duration (timer will start from this new value)
      baseSeconds = this._hmsToSeconds(attrs.duration ?? '0:00:00');
    }

    const newSeconds = baseSeconds + minutes * 60;
    const newDuration = this._secondsToHms(newSeconds);

    // When idle and auto_start is disabled, only update the duration without starting
    const shouldAutoStart = this._config.auto_start !== false;
    const service = state === 'idle' && !shouldAutoStart ? 'change' : 'start';

    this._hass.callService('timer', service, {
      entity_id: this._config.entity,
      duration: newDuration,
    });
  }

  private _hmsToSeconds(hms: string): number {
    const parts = hms.split(':').map(Number);
    while (parts.length < 3) parts.unshift(0);
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  // ── Service calls ────────────────────────────────────────────────────────

  private _start = (): void => {
    this._hass.callService('timer', 'start', { entity_id: this._config.entity });
  };

  private _resume = (): void => {
    this._hass.callService('timer', 'start', { entity_id: this._config.entity });
  };

  private _pause = (): void => {
    this._hass.callService('timer', 'pause', { entity_id: this._config.entity });
  };

  private _cancel = (): void => {
    this._userCancelled = true;
    this._hass.callService('timer', 'cancel', { entity_id: this._config.entity });
  };

  // ── Notifications ────────────────────────────────────────────────────────

  private _sendNotification(attrs: HATimerAttributes): void {
    const service = this._config.notify_service;
    if (!service) return;

    const [domain, ...rest] = service.split('.');
    const serviceAction = rest.join('.');

    const entityName = this._config.name ?? attrs.friendly_name ?? this._config.entity;
    const title = this._config.notify_title ?? 'Timer Finished';
    const message = this._config.notify_message ?? `${entityName} has finished.`;

    this._hass.callService(domain, serviceAction, { title, message });
  }

  // ── Client-side ticker ───────────────────────────────────────────────────

  private _syncTicker(state: TimerState | undefined): void {
    if (state === 'active') {
      this._startTicker();
    } else {
      this._stopTicker();
    }
  }

  private _startTicker(): void {
    if (this._ticker !== undefined) return;
    this._ticker = setInterval(() => this.requestUpdate(), 500);
  }

  private _stopTicker(): void {
    if (this._ticker === undefined) return;
    clearInterval(this._ticker);
    this._ticker = undefined;
  }
}
