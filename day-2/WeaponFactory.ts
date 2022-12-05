import { Weapon } from "./interfaces";
import Paper from "./weapons/Paper";
import Rock from "./weapons/Rock";
import Scissors from "./weapons/Scissors";
import { WeaponCode, WeaponId } from "./types";

class WeaponFactory {
  static createFromCode(type: WeaponCode) : Weapon {
    switch (type) {
      case "A":
        return new Rock;
      case "B":
        return new Paper;
      case "C":
        return new Scissors;
    }
  }
  static createFromId(type: WeaponId) : Weapon {
    switch (type) {
      case "rock":
        return new Rock;
      case "paper":
        return new Paper;
      case "scissors":
        return new Scissors;
    }
  }
}
export default WeaponFactory;