import { Outcome } from "../interfaces";

class Draw implements Outcome {
  id = "draw"
  score = 3
}
export default Draw