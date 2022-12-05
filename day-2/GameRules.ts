import { WeaponId } from "./types";
import { Outcome, Weapon } from "./interfaces"
import Round from "./Round";
import Draw from "./outcomes/Draw";
import Win from "./outcomes/Win";
import Lose from "./outcomes/Lose";
import WeaponFactory from "./WeaponFactory";

class GameRules {
  static outcomeFromRound(round: Round) : Outcome {
    if (round.opponentWeapon.id === round.yourWeapon.id) {
      return new Draw
    }

    if (round.yourWeapon.defeats === round.opponentWeapon.id) {
      return new Win
    }

    return new Lose
  }

  static weaponForOutcome(opponentWeapon: Weapon, desiredOutcome: Outcome) : Weapon {
    switch (desiredOutcome.id) {
      case "win":
        return WeaponFactory.createFromId(opponentWeapon.isDefeatedBy)
      case "lose":
        return WeaponFactory.createFromId(opponentWeapon.defeats)
      case "draw":
        return WeaponFactory.createFromId(opponentWeapon.id as WeaponId)
    }
  }
}
export default GameRules