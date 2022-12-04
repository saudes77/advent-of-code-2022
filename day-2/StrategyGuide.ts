import * as types from "./types"
import Round from "./Round";

class StrategyGuide {
  rounds: Array<Round>

  constructor(input: Array<types.RoundChoices>) {
    this.rounds = input.map((choices) => (new Round(choices)))
  }

  round(roundNumber) {
    return this.rounds[roundNumber - 1]
  }
}
export default StrategyGuide;