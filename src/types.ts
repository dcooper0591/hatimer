import type { HomeAssistant } from 'custom-card-helpers';

export type { HomeAssistant };

export interface TimerCardConfig {
  type: string;
  entity: string;
  name?: string;
  increments?: number[];
  show_controls?: boolean;
  auto_start?: boolean;
  show_name?: boolean;
  show_state?: boolean;
  notify_service?: string;
  notify_title?: string;
  notify_message?: string;
}

export interface HATimerAttributes {
  friendly_name?: string;
  duration: string;
  remaining: string;
  finishes_at?: string;
  restore?: boolean;
  restoring?: boolean;
}

export type TimerState = 'idle' | 'active' | 'paused';

declare global {
  interface Window {
    customCards: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
  }
}
