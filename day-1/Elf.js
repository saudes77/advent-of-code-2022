"use strict";
exports.__esModule = true;
var Elf = /** @class */ (function () {
    function Elf(calorieList) {
        this.snacks = calorieList.map(function (item) { return ({ calories: item }); });
    }
    Elf.prototype.caloriesAvailable = function () {
        return this.snacks.reduce(function (accumulator, snack) { return accumulator + snack.calories; }, 0);
    };
    return Elf;
}());
exports["default"] = Elf;
