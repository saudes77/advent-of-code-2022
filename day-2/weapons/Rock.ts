import { Weapon } from "../interfaces";
import { WeaponId } from "../types";

class Rock implements Weapon {
  id = "rock" as WeaponId
  score = 1
  defeats = "scissors" as WeaponId
  isDefeatedBy = "paper" as WeaponId
}
export default Rock