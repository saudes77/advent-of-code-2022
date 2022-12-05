import ScoreCalculator from "./ScoreCalculator";
import StrategyGuide from "./StrategyGuide";
import strategyInput from "./input/part-1"
import * as types from "./types"

// part 1 & 2
const guide = new StrategyGuide(strategyInput as Array<types.RoundChoices>);
const calculator = new ScoreCalculator(guide);
console.log(`The total score based on the strategy guide is: ${calculator.finalScore()}`)