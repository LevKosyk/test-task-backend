import { baseReelSet} from '../config/config.js';
import { makeRoll, calculateWin, countScatters } from '../utils/utils.js';
import { runBonus } from './bonus.js';

export function playSpin() {
  let baseWin = 0;
  let bonusWin = 0;
  const baseField = makeRoll(baseReelSet);
  baseWin += calculateWin(baseField);
  const scattersCount = countScatters(baseField);
  if (scattersCount >= 3) {
    bonusWin += runBonus();
  }
  return { baseWin, bonusWin };
}