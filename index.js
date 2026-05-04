const symbolMapping = {
  1: "H1",
  2: "H2",
  3: "H3",
  4: "L1",
  5: "L2",
  6: "L3",
  7: "S",
};

const paylines = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [0, 1, 2, 1, 0],
  [2, 1, 0, 1, 2],
  [1, 0, 0, 0, 1],
  [1, 2, 2, 2, 1],
  [0, 0, 1, 2, 2],
  [2, 2, 1, 0, 0],
  [1, 0, 1, 2, 1],
];

const payouts = {
  1: { 3: 100, 4: 500, 5: 2000 },
  2: { 3: 50, 4: 200, 5: 1000 },
  3: { 3: 20, 4: 100, 5: 500 },
  4: { 3: 10, 4: 40, 5: 200 },
  5: { 3: 5, 4: 20, 5: 100 },
  6: { 3: 2, 4: 10, 5: 50 },
};

const baseReelSet = [1, 2, 3, 4, 5, 6, 7];
const bonusReelSet = [1, 2, 3];

function countScatters(field) {
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

function playSpin() {
  let totalWin = 0;
  const baseField = makeRoll(baseReelSet);
  totalWin += calculateWin(baseField);
  const scattersCount = countScatters(baseField);
  if (scattersCount >= 3) {
    for (let i = 0; i < 8; i++) {
      const bonusField = makeRoll(bonusReelSet);
      totalWin += calculateWin(bonusField);
    }
  }
  return totalWin;
}

function makeRoll(reelSet) {
  const field = [];
  for (let i = 0; i < 5; i++) {
    field[i] = [];
    for (let j = 0; j < 3; j++) {
      const randomIndex = Math.floor(Math.random() * reelSet.length);
      field[i][j] = reelSet[randomIndex];
    }
  }
  return field;
}

function showField(field) {
  for (let j = 0; j < 3; j++) {
    let str = "";
    for (let i = 0; i < 5; i++) {
      const symbolId = field[i][j];
      str += symbolMapping[symbolId] + "\t";
    }
    console.log(str);
  }
}

function calculateWin(field) {
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
