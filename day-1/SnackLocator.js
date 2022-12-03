"use strict";
exports.__esModule = true;
var Elf_1 = require("./Elf");
var SnackLocator = /** @class */ (function () {
    function SnackLocator(snackList) {
        this.elves = snackList.map(function (calorieList) { return new Elf_1["default"](calorieList); });
    }
    SnackLocator.prototype.elfToAsk = function () {
        return this.elves.reduce(function (chosenElf, currentElf) {
            return currentElf.caloriesAvailable() > chosenElf.caloriesAvailable() ? currentElf : chosenElf;
        }, this.elves[0]);
    };
    return SnackLocator;
}());
exports["default"] = SnackLocator;
