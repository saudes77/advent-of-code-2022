"use strict";
exports.__esModule = true;
var ScoreCalculator_1 = require("./ScoreCalculator");
var StrategyGuide_1 = require("./StrategyGuide");
var part_1_1 = require("./input/part-1");
// part 1
var guide = new StrategyGuide_1["default"](part_1_1["default"]);
var calculator = new ScoreCalculator_1["default"](guide);
console.log("The total score based on the strategy guide is: ".concat(calculator.finalScore()));
