import { Weapon } from "../interfaces";
import { WeaponId } from "../types";

class Paper implements Weapon {
  id = "paper" as WeaponId
  score = 2
  defeats = "rock" as WeaponId
  isDefeatedBy = "scissors" as WeaponId
}
export default Paper