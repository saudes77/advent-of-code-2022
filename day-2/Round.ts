import * as types from "./types"
import { Weapon, Outcome } from "./interfaces"
import WeaponFactory from "./WeaponFactory"
import GameRules from "./GameRules"
import OutcomeFactory from "./OutcomeFactory"

class Round {
  opponentWeapon: Weapon
  yourWeapon: Weapon
  outcome: Outcome

  constructor(choices: types.RoundChoices) {
    this.opponentWeapon = WeaponFactory.createFromCode(choices[0])
    const desiredOutcome = OutcomeFactory.create(choices[1])
    this.yourWeapon = GameRules.weaponForOutcome(this.opponentWeapon, desiredOutcome)
    this.outcome = GameRules.outcomeFromRound(this)
  }

  score() : number {
    return this.yourWeapon.score + this.outcome.score
  }
}
export default Round