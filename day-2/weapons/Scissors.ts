import { Weapon } from "../interfaces";
import { WeaponId } from "../types";

class Scissors implements Weapon {
  id = "scissors" as WeaponId
  score = 3
  defeats = "paper" as WeaponId
  isDefeatedBy = "rock" as WeaponId
}
export default Scissors