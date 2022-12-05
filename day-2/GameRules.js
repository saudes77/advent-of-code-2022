"use strict";
exports.__esModule = true;
var Draw_1 = require("./outcomes/Draw");
var Win_1 = require("./outcomes/Win");
var Lose_1 = require("./outcomes/Lose");
var WeaponFactory_1 = require("./WeaponFactory");
var GameRules = /** @class */ (function () {
    function GameRules() {
    }
    GameRules.outcomeFromRound = function (round) {
        if (round.opponentWeapon.id === round.yourWeapon.id) {
            return new Draw_1["default"];
        }
        if (round.yourWeapon.defeats === round.opponentWeapon.id) {
            return new Win_1["default"];
        }
        return new Lose_1["default"];
    };
    GameRules.weaponForOutcome = function (opponentWeapon, desiredOutcome) {
        switch (desiredOutcome.id) {
            case "win":
                return WeaponFactory_1["default"].createFromId(opponentWeapon.isDefeatedBy);
            case "lose":
                return WeaponFactory_1["default"].createFromId(opponentWeapon.defeats);
            case "draw":
                return WeaponFactory_1["default"].createFromId(opponentWeapon.id);
        }
    };
    return GameRules;
}());
exports["default"] = GameRules;
