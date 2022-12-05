import { OutcomeCode } from "./types";
import { Outcome } from "./interfaces";
import Draw from "./outcomes/Draw";
import Lose from "./outcomes/Lose";
import Win from "./outcomes/Win";

class OutcomeFactory {
  static create(type: OutcomeCode) : Outcome {
    switch (type) {
      case "X":
        return new Lose;
      case "Y":
        return new Draw;
      case "Z":
        return new Win;
    }
  }
}
export default OutcomeFactory;