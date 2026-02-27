import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { fireEvent } from 'custom-card-helpers';
import { editorStyles } from './styles.js';
import { DEFAULT_INCREMENTS } from './const.js';
import type { TimerCardConfig, HomeAssistant } from './types.js';

@customElement('hatimer-card-editor')
export class HaTimerCardEditor extends LitElement {
  static styles = editorStyles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: TimerCardConfig;

  setConfig(config: TimerCardConfig): void {
    this._config = config;
  }

  render() {
    if (!this._config) return nothing;

    const increments = this._config.increments ?? DEFAULT_INCREMENTS;
    const showControls = this._config.show_controls !== false;
    const showName = this._config.show_name !== false;
    const showState = this._config.show_state !== false;
    const autoStart = this._config.auto_start !== false;

    return html`
      <div class="editor-row">

        <!-- Entity picker (timer domain only) -->
        <ha-entity-picker
          label="Timer Entity"
          .hass=${this.hass}
          .value=${this._config.entity ?? ''}
          .includeDomains=${['timer']}
          allow-custom-entity
          @value-changed=${this._entityChanged}
        ></ha-entity-picker>

        <!-- Display name override -->
        <ha-textfield
          label="Display Name (optional)"
          .value=${this._config.name ?? ''}
          placeholder="Uses entity friendly_name by default"
          @change=${this._nameChanged}
        ></ha-textfield>

        <!-- Increment buttons -->
        <div>
          <div class="row-label">Time Increment Buttons (minutes)</div>
          <input
            class="increments-input"
            type="text"
            .value=${increments.join(', ')}
            placeholder="1, 5, 10"
            @change=${this._incrementsChanged}
          />
          <div class="helper-text">
            Comma-separated list of minute values. Leave empty to hide increment buttons.
          </div>
        </div>

        <!-- Notify service -->
        <ha-textfield
          label="Notify Service (optional)"
          .value=${this._config.notify_service ?? ''}
          placeholder="e.g. notify.mobile_app_my_phone"
          @change=${this._notifyServiceChanged}
        ></ha-textfield>

        ${this._config.notify_service
          ? html`
              <ha-textfield
                label="Notification Title (optional)"
                .value=${this._config.notify_title ?? ''}
                placeholder="Timer Finished"
                @change=${this._notifyTitleChanged}
              ></ha-textfield>

              <ha-textfield
                label="Notification Message (optional)"
                .value=${this._config.notify_message ?? ''}
                placeholder="Uses entity name by default"
                @change=${this._notifyMessageChanged}
              ></ha-textfield>
            `
          : nothing}

        <!-- Show name toggle -->
        <div class="toggle-row">
          <div class="row-label">Show name</div>
          <ha-switch
            .checked=${showName}
            @change=${this._showNameChanged}
          ></ha-switch>
        </div>

        <!-- Show state badge toggle -->
        <div class="toggle-row">
          <div class="row-label">Show state (Idle / Active / Paused)</div>
          <ha-switch
            .checked=${showState}
            @change=${this._showStateChanged}
          ></ha-switch>
        </div>

        <!-- Auto start toggle -->
        <div class="toggle-row">
          <div class="row-label">Auto-start timer when adding time from idle</div>
          <ha-switch
            .checked=${autoStart}
            @change=${this._autoStartChanged}
          ></ha-switch>
        </div>

        <!-- Show controls toggle -->
        <div class="toggle-row">
          <div class="row-label">Show Start / Pause / Cancel controls</div>
          <ha-switch
            .checked=${showControls}
            @change=${this._showControlsChanged}
          ></ha-switch>
        </div>

      </div>
    `;
  }

  // ── Change handlers ──────────────────────────────────────────────────────

  private _entityChanged(ev: CustomEvent): void {
    this._updateConfig({ entity: ev.detail.value as string });
  }

  private _nameChanged(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value.trim();
    const update: Partial<TimerCardConfig> = {};
    if (value) {
      update.name = value;
    } else {
      // Remove the key entirely when cleared
      const { name: _removed, ...rest } = this._config;
      fireEvent(this, 'config-changed', { config: rest });
      return;
    }
    this._updateConfig(update);
  }

  private _incrementsChanged(ev: Event): void {
    const raw = (ev.target as HTMLInputElement).value;
    const parsed = raw
      .split(',')
      .map((s) => parseInt(s.trim(), 10))
      .filter((n) => !isNaN(n) && n > 0);
    this._updateConfig({ increments: parsed });
  }

  private _notifyServiceChanged(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value.trim();
    if (value) {
      this._updateConfig({ notify_service: value });
    } else {
      const { notify_service: _a, notify_title: _b, notify_message: _c, ...rest } = this._config;
      fireEvent(this, 'config-changed', { config: rest });
    }
  }

  private _notifyTitleChanged(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value.trim();
    if (value) {
      this._updateConfig({ notify_title: value });
    } else {
      const { notify_title: _removed, ...rest } = this._config;
      fireEvent(this, 'config-changed', { config: rest });
    }
  }

  private _notifyMessageChanged(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value.trim();
    if (value) {
      this._updateConfig({ notify_message: value });
    } else {
      const { notify_message: _removed, ...rest } = this._config;
      fireEvent(this, 'config-changed', { config: rest });
    }
  }

  private _showNameChanged(ev: Event): void {
    this._updateConfig({ show_name: (ev.target as HTMLInputElement).checked });
  }

  private _showStateChanged(ev: Event): void {
    this._updateConfig({ show_state: (ev.target as HTMLInputElement).checked });
  }

  private _autoStartChanged(ev: Event): void {
    this._updateConfig({ auto_start: (ev.target as HTMLInputElement).checked });
  }

  private _showControlsChanged(ev: Event): void {
    this._updateConfig({ show_controls: (ev.target as HTMLInputElement).checked });
  }

  // ── Helper ───────────────────────────────────────────────────────────────

  private _updateConfig(patch: Partial<TimerCardConfig>): void {
    const newConfig: TimerCardConfig = { ...this._config, ...patch };
    fireEvent(this, 'config-changed', { config: newConfig });
  }
}
