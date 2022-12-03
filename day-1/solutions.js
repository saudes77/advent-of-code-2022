"use strict";
exports.__esModule = true;
var part_1_1 = require("./inputs/part-1");
var SnackLocator_1 = require("./SnackLocator");
var calories = new SnackLocator_1["default"](part_1_1["default"]).elfToAsk().caloriesAvailable();
console.log("The elf with the most snacks (by calorie) has ".concat(calories, " calories available."));
