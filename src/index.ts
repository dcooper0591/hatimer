import { CARD_TAG, CARD_NAME, CARD_DESCRIPTION } from './const.js';
import './hatimer-card.js';

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: CARD_TAG,
  name: CARD_NAME,
  description: CARD_DESCRIPTION,
  preview: true,
});
