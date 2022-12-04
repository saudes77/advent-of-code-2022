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

  elvesBySnackage(lmt: number | undefined) : Array<Elf> {
    const rankedElves = this.elves.sort((a, b) => b.caloriesAvailable() - a.caloriesAvailable())

    if (lmt) {
      return rankedElves.slice(0, lmt)
    }

    return rankedElves
  }
}
export default SnackLocator;