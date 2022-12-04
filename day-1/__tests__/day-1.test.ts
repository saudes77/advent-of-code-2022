import sampleSnackList from "../inputs/sample-snack-list";
import SnackLocator from "../SnackLocator";

describe("SnackLocator", () => {
  it("locates the elf with the most snacks (calorie-wise)", () => {
    const snackLocator = new SnackLocator(sampleSnackList);
    expect(snackLocator.elfToAsk().caloriesAvailable()).toEqual(24000);
  })
  it("ranks elves by how many snacks (calorie-wise) they have", () => {
    const snackLocator = new SnackLocator(sampleSnackList);
    const elves = snackLocator.elvesBySnackage(3)
    expect(elves.length).toEqual(3)
    expect(elves.reduce((counter, elf) => counter + elf.caloriesAvailable(), 0)).toEqual(45000);
  })
});