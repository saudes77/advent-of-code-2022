import snackList from "./inputs/part-1";
import SnackLocator from "./SnackLocator";

// part 1
// const calories = new SnackLocator(snackList).elfToAsk().caloriesAvailable()
// console.log(`The elf with the most snacks (by calorie) has ${calories} calories available.`)

//  part 2
const elves = new SnackLocator(snackList).elvesBySnackage(3)
const result = elves.reduce((counter, elf) => counter + elf.caloriesAvailable(), 0)
console.log(`The top 3 elves with the most snacks (by calorie) have ${result} calories available.`)