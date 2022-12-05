"use strict";
exports.__esModule = true;
var Paper_1 = require("./weapons/Paper");
var Rock_1 = require("./weapons/Rock");
var Scissors_1 = require("./weapons/Scissors");
var WeaponFactory = /** @class */ (function () {
    function WeaponFactory() {
    }
    WeaponFactory.createFromCode = function (type) {
        switch (type) {
            case "A":
                return new Rock_1["default"];
            case "B":
                return new Paper_1["default"];
            case "C":
                return new Scissors_1["default"];
        }
    };
    WeaponFactory.createFromId = function (type) {
        switch (type) {
            case "rock":
                return new Rock_1["default"];
            case "paper":
                return new Paper_1["default"];
            case "scissors":
                return new Scissors_1["default"];
        }
    };
    return WeaponFactory;
}());
exports["default"] = WeaponFactory;
