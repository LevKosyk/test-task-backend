import { bonusReelSet } from '../config/config.js';
import { makeRoll, calculateWin } from '../utils/utils.js';

export function runBonus() {
  let bonusWin = 0;
  for (let i = 0; i < 8; i++) {
    const bonusField = makeRoll(bonusReelSet);
    bonusWin += calculateWin(bonusField);
  }
  return bonusWin;
}
