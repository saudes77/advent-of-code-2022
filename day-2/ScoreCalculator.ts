import Round from "./Round";
import StrategyGuide from "./StrategyGuide";

class ScoreCalculator {
  rounds: Array<Round>

  constructor(guide: StrategyGuide) {
    this.rounds = guide.rounds
  }

  finalScore() :number {
    return this.rounds.reduce((sum, round) => (round.score() + sum), 0)
  }
}
export default ScoreCalculator