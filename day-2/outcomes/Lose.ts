import { Outcome } from "../interfaces";

class Lose implements Outcome {
  id = "lose"
  score = 0
}
export default Lose