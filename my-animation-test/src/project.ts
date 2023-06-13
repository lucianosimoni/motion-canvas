import { makeProject } from "@motion-canvas/core";

import example from "./scenes/example?scene";
import firstScene from "./scenes/firstScene?scene";
import secondScene from "./scenes/secondScene?scene";

export default makeProject({
  scenes: [firstScene, secondScene],
});
