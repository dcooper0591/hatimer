import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 12px;
  }

  .card-header {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
    padding: 0;
    margin: 0;
    line-height: 1.4;
  }

  /* ── Timer display ── */

  .timer-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .timer-time {
    font-size: 3rem;
    font-weight: 300;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.04em;
    line-height: 1;
    color: var(--primary-text-color);
    transition: color 0.3s ease;
  }

  .timer-time.state-active {
    color: var(--primary-color);
  }

  .timer-time.state-paused {
    color: var(--secondary-text-color);
  }

  .timer-time.state-idle {
    color: var(--disabled-text-color, var(--secondary-text-color));
  }

  .state-badge {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    transition: background 0.3s ease, color 0.3s ease;
  }

  .state-badge.state-active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .state-badge.state-paused {
    background: var(--warning-color, #ff9800);
    color: var(--text-primary-color, #fff);
  }

  /* ── Increment buttons ── */

  .increments {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .increment-btn {
    flex: 1;
    min-width: 56px;
    padding: 6px 4px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
    line-height: 1.2;
  }

  .increment-btn:hover {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color);
  }

  .increment-btn:active {
    transform: scale(0.96);
  }

  /* ── Control buttons ── */

  .controls {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .control-btn {
    flex: 1;
    padding: 10px 8px;
    border: none;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
    line-height: 1;
  }

  .control-btn:active {
    transform: scale(0.96);
  }

  .btn-start {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .btn-start:hover {
    filter: brightness(1.1);
  }

  .btn-pause {
    background: var(--warning-color, #ff9800);
    color: var(--text-primary-color, #fff);
  }

  .btn-pause:hover {
    filter: brightness(1.1);
  }

  .btn-cancel {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .btn-cancel:hover {
    background: var(--error-color, #db4437);
    color: var(--text-primary-color, #fff);
    border-color: var(--error-color, #db4437);
  }

  /* ── Error state ── */

  .error {
    padding: 16px;
    color: var(--error-color, #db4437);
    font-size: 0.9rem;
  }
`;

export const editorStyles = css`
  .editor-row {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .row-label {
    font-size: 0.85rem;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .increments-input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 4px;
    background: var(--primary-background-color);
    color: var(--primary-text-color);
    font-size: 1rem;
    box-sizing: border-box;
  }

  .helper-text {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  .toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
