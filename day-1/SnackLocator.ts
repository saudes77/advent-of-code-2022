import Elf from "./Elf";

class SnackLocator {

  elves: Array<Elf>

  constructor(snackList: Array<Array<number>>) {
    this.elves = snackList.map((calorieList) => new Elf(calorieList))
  }

  elfToAsk() : Elf {
    return this.elves.reduce((chosenElf, currentElf) => {
      return currentElf.caloriesAvailable() > chosenElf.caloriesAvailable() ? currentElf : chosenElf
    }, this.elves[0])
  }
}
export default SnackLocator;