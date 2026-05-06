import { betPerSpin } from "./moduls/config/config.js";
import { playSpin } from "./moduls/games/base.js";

function runSimulation(numSpins) {
  let totalBaseWin = 0;
  let totalBonusWin = 0;

  for (let i = 0; i < numSpins; i++) {
    const result = playSpin();
    totalBaseWin += result.baseWin;
    totalBonusWin += result.bonusWin;
  }

  const totalBet = numSpins * betPerSpin;
  const totalWin = totalBaseWin + totalBonusWin;

  const baseRTP = (totalBaseWin / totalBet) * 100;
  const bonusRTP = (totalBonusWin / totalBet) * 100;
  const totalRTP = (totalWin / totalBet) * 100;

  console.log(`Simulation Results for ${numSpins} spins`);
  console.log(`Total Bet: ${totalBet}`);
  console.log(`Total Win: ${totalWin}`);
  console.log(`Base Game RTP: ${baseRTP.toFixed(2)}%`);
  console.log(`Bonus Game RTP: ${bonusRTP.toFixed(2)}%`);
  console.log(`Total RTP: ${totalRTP.toFixed(2)}%`);
}

runSimulation(1000000);
