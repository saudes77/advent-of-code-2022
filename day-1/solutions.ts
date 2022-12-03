import snackList from "./inputs/part-1";
import SnackLocator from "./SnackLocator";

const calories = new SnackLocator(snackList).elfToAsk().caloriesAvailable()
console.log(`The elf with the most snacks (by calorie) has ${calories} calories available.`)