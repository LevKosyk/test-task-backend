import { paylines, payouts, symbolMapping } from "../config/config.js";

export function makeRoll(reelStrip) {
  const field = [];

  for (let col = 0; col < 5; col++) {
    field[col] = [];

    const n = Math.floor(Math.random() * reelStrip.length);

    const topIndex = (n - 1 + reelStrip.length) % reelStrip.length;
    const bottomIndex = (n + 1) % reelStrip.length;

    field[col][0] = reelStrip[topIndex];
    field[col][1] = reelStrip[n];
    field[col][2] = reelStrip[bottomIndex];
  }
  return field;
}

export function showField(field) {
  for (let j = 0; j < 3; j++) {
    let str = "";
    for (let i = 0; i < 5; i++) {
      const symbolId = field[i][j];
      str += symbolMapping[symbolId] + "\t";
    }
    console.log(str);
  }
}

export function calculateWin(field) {
  let totalWin = 0;

  for (let lineIndex = 0; lineIndex < paylines.length; lineIndex++) {
    const line = paylines[lineIndex];
    const firstSymbol = field[0][line[0]];
    if (firstSymbol === 7) {
      continue;
    }
    let matchCount = 1;
    for (let col = 1; col < 5; col++) {
      const currentSymbol = field[col][line[col]];
      if (currentSymbol === firstSymbol) {
        matchCount++;
      } else {
        break;
      }
    }
    if (matchCount >= 3) {
      const win = payouts[firstSymbol][matchCount];
      totalWin += win;
    }
  }
  return totalWin;
}

export function countScatters(field) {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      if (field[i][j] === 7) {
        count++;
      }
    }
  }
  return count;
}
