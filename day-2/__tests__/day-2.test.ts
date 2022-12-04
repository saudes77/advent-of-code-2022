import strategyInput from "../input/sample-strategy-guide"
import StrategyGuide from "../StrategyGuide";
import ScoreCalculator from "../ScoreCalculator"
import * as types from "../types"

describe("StrategyGuide", () => {
  it("converts alphebetic input into Rock, Paper, Scissor outcomes", () => {
    const guide = new StrategyGuide(strategyInput as Array<types.RoundChoices>);
    expect(guide.round(1).score()).toEqual(8)
    expect(guide.round(1).yourWeapon).toEqual("paper")
    expect(guide.round(1).opponentWeapon).toEqual("rock")
  })
})

describe("ScoreCalculator", () => {
  it("calculates the final score from a strategy guide", () => {
    const guide = new StrategyGuide(strategyInput as Array<types.RoundChoices>);
    const calculator = new ScoreCalculator(guide);
    expect(calculator.finalScore()).toEqual(15)
  })
})