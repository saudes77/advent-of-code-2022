"use strict";
exports.__esModule = true;
var Round_1 = require("./Round");
var StrategyGuide = /** @class */ (function () {
    function StrategyGuide(input) {
        this.rounds = input.map(function (choices) { return (new Round_1["default"](choices)); });
    }
    StrategyGuide.prototype.round = function (roundNumber) {
        return this.rounds[roundNumber - 1];
    };
    return StrategyGuide;
}());
exports["default"] = StrategyGuide;
