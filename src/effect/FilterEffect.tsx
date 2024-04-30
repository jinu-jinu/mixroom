import { Effect } from "postprocessing";
import fragmentShader from "./fragment.glsl?raw";

export default class FilterEffect extends Effect {
  constructor() {
    super("FilterEffect", fragmentShader, {});
  }
}
