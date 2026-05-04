const symbolMapping = {
  1: "H1", 2: "H2", 3: "H3", 
  4: "L1", 5: "L2", 6: "L3", 
  7: "S"                     
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
  [1, 0, 1, 2, 1]  
];

const payouts = {
  1: { 3: 100, 4: 500, 5: 2000 }, 
  2: { 3: 50, 4: 200, 5: 1000 }, 
  3: { 3: 20, 4: 100, 5: 500 },  
  4: { 3: 10, 4: 40, 5: 200 },    
  5: { 3: 5, 4: 20, 5: 100 },     
  6: { 3: 2, 4: 10, 5: 50 }      
};

const baseReelSet = [1, 2, 3, 4, 5, 6, 7]; 
const bonusReelSet = [1, 2, 3]; 

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