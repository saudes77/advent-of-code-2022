import { WeaponId } from "./types"

interface Weapon {
  id: WeaponId,
  score: number,
  defeats: WeaponId,
  isDefeatedBy: WeaponId
}
interface Outcome {
  id: string,
  score: number
}

export { Outcome, Weapon }