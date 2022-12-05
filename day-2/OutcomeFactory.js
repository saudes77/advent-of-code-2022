"use strict";
exports.__esModule = true;
var Draw_1 = require("./outcomes/Draw");
var Lose_1 = require("./outcomes/Lose");
var Win_1 = require("./outcomes/Win");
var OutcomeFactory = /** @class */ (function () {
    function OutcomeFactory() {
    }
    OutcomeFactory.create = function (type) {
        switch (type) {
            case "X":
                return new Lose_1["default"];
            case "Y":
                return new Draw_1["default"];
            case "Z":
                return new Win_1["default"];
        }
    };
    return OutcomeFactory;
}());
exports["default"] = OutcomeFactory;
