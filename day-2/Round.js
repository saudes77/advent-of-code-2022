"use strict";
exports.__esModule = true;
var Round = /** @class */ (function () {
    function Round(choices) {
        this.opponentWeapon = Round.opponentWeaponMapping[choices[0]];
        this.yourWeapon = Round.yourWeaponMapping[choices[1]];
    }
    Round.prototype.outcome = function () {
        if (this.opponentWeapon === this.yourWeapon) {
            return "draw";
        }
        if (this.opponentWeapon === Round.weaponWins[this.yourWeapon]) {
            return "won";
        }
        return "lost";
    };
    Round.prototype.score = function () {
        var outcomeScore = Round.outcomeScore[this.outcome()];
        return Round.weaponScore[this.yourWeapon] + outcomeScore;
    };
    Round.yourWeaponMapping = {
        X: "rock",
        Y: "paper",
        Z: "scissors"
    };
    Round.opponentWeaponMapping = {
        A: "rock",
        B: "paper",
        C: "scissors"
    };
    Round.weaponScore = {
        rock: 1,
        paper: 2,
        scissors: 3
    };
    Round.outcomeScore = {
        won: 6,
        lost: 0,
        draw: 3
    };
    Round.weaponWins = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };
    return Round;
}());
exports["default"] = Round;
