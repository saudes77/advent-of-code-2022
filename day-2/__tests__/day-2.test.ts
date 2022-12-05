import strategyInput from "../input/sample-strategy-guide"
import StrategyGuide from "../StrategyGuide";
import ScoreCalculator from "../ScoreCalculator"
import * as types from "../types"
import Round from "../Round";
import { Outcome, Weapon } from "../interfaces";
import WeaponFactory from "../WeaponFactory";
import OutcomeFactory from "../OutcomeFactory";
import Rock from "../weapons/Rock";
import Win from "../outcomes/Win";
import GameRules from "../GameRules";

describe.skip("Part 1", () => {
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
})

describe("Part 2", () => {
  describe("WeaponFactory", () => {
    it("returns the correct weapon object", () => {
      const weapon : Weapon = WeaponFactory.createFromCode("A")
      expect(weapon.id).toEqual("rock")
      expect(weapon.score).toEqual(1)
      expect(weapon.defeats).toEqual("scissors")
    })
  })
  describe("OutcomeFactory", () => {
    it("returns the correct outcome object", () => {
      const outcome : Outcome = OutcomeFactory.create("X")
      expect(outcome.id).toEqual("lose")
      expect(outcome.score).toEqual(0)
    })
  })
  describe("GameRules", () => {
    it("knows which weapon will lead to the desired outcome", () => {
      const opponentWeapon = new Rock
      const desiredOutcome = new Win
      const result : Weapon = GameRules.weaponForOutcome(opponentWeapon, desiredOutcome)

      expect(result.id).toEqual("paper")
    })
    it("can determine the outcome of a round", () => {
      const round = new Round(["A", "Z"])
      const result : Outcome = GameRules.outcomeFromRound(round)

      expect(result.id).toEqual("win")
    })
  })
  describe("Round", () => {
    it("correctly interprets the strategy", () => {
      const round = new Round(strategyInput[0] as types.RoundChoices);
      
      expect(round.opponentWeapon.id).toEqual("rock")
      expect(round.yourWeapon.id).toEqual("rock")
    })
  })
  describe("ScoreCalculator", () => {
    it("calculates the final score from a strategy guide", () => {
      const guide = new StrategyGuide(strategyInput as Array<types.RoundChoices>);
      const calculator = new ScoreCalculator(guide);
      expect(calculator.finalScore()).toEqual(12)
    })
  })
})