import { makeProject } from "@motion-canvas/core";

import firstScene from "./scenes/firstScene?scene";
import secondScene from "./scenes/secondScene?scene";

export default makeProject({
  scenes: [firstScene, secondScene],
});
