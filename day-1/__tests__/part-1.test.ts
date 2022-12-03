import sampleSnackList from "../inputs/sample-snack-list";
import SnackLocator from "../SnackLocator";

describe("SnackLocator", () => {
  it("locates the elf with the most snacks (calorie-wise)", () => {
    const snackLocator = new SnackLocator(sampleSnackList);
    expect(snackLocator.elfToAsk().caloriesAvailable()).toEqual(24000);
  })
});