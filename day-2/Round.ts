import * as types from "./types"

class Round {
  opponentWeapon: types.Weapon
  yourWeapon: types.Weapon

  static yourWeaponMapping = {
    X: "rock",
    Y: "paper",
    Z: "scissors"
  }
  static opponentWeaponMapping = {
    A: "rock",
    B: "paper",
    C: "scissors"
  }

  static weaponScore = {
    rock: 1,
    paper: 2,
    scissors: 3
  }

  static outcomeScore = {
    won: 6,
    lost: 0,
    draw: 3
  }

  static weaponWins = {
    rock: "sciccors",
    scissors: "paper",
    paper: "rock"
  }

  constructor(choices: types.RoundChoices) {
    this.opponentWeapon = Round.opponentWeaponMapping[choices[0]] as types.Weapon
    this.yourWeapon = Round.yourWeaponMapping[choices[1]] as types.Weapon
  }

  outcome() : types.Outcome {
    if (this.opponentWeapon === this.yourWeapon) {
      return "draw"
    }

    if (this.opponentWeapon === Round.weaponWins[this.yourWeapon]) {
      return "won"
    }

    return "lost"
  }

  score() : number {
    const outcomeScore = Round.outcomeScore[this.outcome()]
    return Round.weaponScore[this.yourWeapon] + outcomeScore
  }
}
export default Round