import { SnackElf, Snack } from "./interfaces"

class Elf implements SnackElf {
  snacks: Array<Snack>

  constructor(calorieList: Array<number>) {
    this.snacks = calorieList.map((item) => ({ calories: item }) )
  }

  caloriesAvailable() : number {
    return this.snacks.reduce(
      (accumulator, snack) => accumulator + snack.calories,
      0
    )
  }
}
export default Elf;