"use strict";
exports.__esModule = true;
var WeaponFactory_1 = require("./WeaponFactory");
var GameRules_1 = require("./GameRules");
var OutcomeFactory_1 = require("./OutcomeFactory");
var Round = /** @class */ (function () {
    function Round(choices) {
        this.opponentWeapon = WeaponFactory_1["default"].createFromCode(choices[0]);
        var desiredOutcome = OutcomeFactory_1["default"].create(choices[1]);
        this.yourWeapon = GameRules_1["default"].weaponForOutcome(this.opponentWeapon, desiredOutcome);
        this.outcome = GameRules_1["default"].outcomeFromRound(this);
    }
    Round.prototype.score = function () {
        return this.yourWeapon.score + this.outcome.score;
    };
    return Round;
}());
exports["default"] = Round;
