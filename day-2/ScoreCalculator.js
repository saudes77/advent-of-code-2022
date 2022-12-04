"use strict";
exports.__esModule = true;
var ScoreCalculator = /** @class */ (function () {
    function ScoreCalculator(guide) {
        this.rounds = guide.rounds;
    }
    ScoreCalculator.prototype.finalScore = function () {
        return this.rounds.reduce(function (sum, round) { return (round.score() + sum); }, 0);
    };
    return ScoreCalculator;
}());
exports["default"] = ScoreCalculator;
