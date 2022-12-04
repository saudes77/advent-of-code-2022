import strategyInput from "../input/sample-strategy-guide"
import StrategyGuide from "../StrategyGuide";
import ScoreCalculator from "../ScoreCalculator"
import * as types from "../types"
import Round from "../Round";

describe("Round", () => {
  it("converts alphebetic input into Rock, Paper, Scissor outcomes", () => {
    const round = new Round(strategyInput[0] as types.RoundChoices);
    expect(round.score()).toEqual(8)
    expect(round.yourWeapon).toEqual("paper")
    expect(round.opponentWeapon).toEqual("rock")
  })
  it("correctly handle draws", () => {
    const round = new Round(strategyInput[2] as types.RoundChoices);
    expect(round.yourWeapon).toEqual("scissors")
    expect(round.opponentWeapon).toEqual("scissors")
    expect(round.score()).toEqual(6)
  })
})

describe("StrategyGuide", () => {
  it("transforms strategy input into Round objects", () => {
    const guide = new StrategyGuide(strategyInput as Array<types.RoundChoices>);
    expect(guide.rounds.length).toEqual(3)
    expect(guide.round(2).yourWeapon).toEqual("rock")
    expect(guide.round(2).opponentWeapon).toEqual("paper")
    expect(guide.round(2).score()).toEqual(1)
  })
})

describe("ScoreCalculator", () => {
  it("calculates the final score from a strategy guide", () => {
    const guide = new StrategyGuide(strategyInput as Array<types.RoundChoices>);
    const calculator = new ScoreCalculator(guide);
    expect(calculator.finalScore()).toEqual(15)
  })
})