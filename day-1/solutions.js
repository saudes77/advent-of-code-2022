"use strict";
exports.__esModule = true;
var part_1_1 = require("./inputs/part-1");
var SnackLocator_1 = require("./SnackLocator");
// part 1
// const calories = new SnackLocator(snackList).elfToAsk().caloriesAvailable()
// console.log(`The elf with the most snacks (by calorie) has ${calories} calories available.`)
//  part 2
var elves = new SnackLocator_1["default"](part_1_1["default"]).elvesBySnackage(3);
var result = elves.reduce(function (counter, elf) { return counter + elf.caloriesAvailable(); }, 0);
console.log("The top 3 elves with the most snacks (by calorie) have ".concat(result, " calories available."));
