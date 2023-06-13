import {
  Circle,
  Layout,
  Node,
  Rect,
  Txt,
  makeScene2D,
} from "@motion-canvas/2d";
import {
  Direction,
  ThreadGenerator,
  all,
  createRef,
  slideTransition,
  waitFor,
  zoomOutTransition,
} from "@motion-canvas/core";
import { opacityFade } from "../utils/customFunctions";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();

  view.add(
    <Txt ref={title} fontSize={100} fontWeight={700} fill={"white"}>
      Hello there
    </Txt>
  );

  yield* slideTransition(Direction.Left);
  yield* waitFor(1);
  yield* opacityFade(title(), false, 0, 0.5);
});
