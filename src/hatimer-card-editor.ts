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

  private _showControlsChanged(ev: Event): void {
    this._updateConfig({ show_controls: (ev.target as HTMLInputElement).checked });
  }

  // ── Helper ───────────────────────────────────────────────────────────────

  private _updateConfig(patch: Partial<TimerCardConfig>): void {
    const newConfig: TimerCardConfig = { ...this._config, ...patch };
    fireEvent(this, 'config-changed', { config: newConfig });
  }
}
