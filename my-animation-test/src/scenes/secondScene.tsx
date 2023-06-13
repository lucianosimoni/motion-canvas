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
} from "@motion-canvas/core";
import { opacityFade } from "../utils/customFunctions";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();

  yield* slideTransition(Direction.Left);
  yield* waitFor(0);

  view.add(
    <Txt ref={title} fontSize={100} fontWeight={700} fill={"white"} opacity={0}>
      Hello there
    </Txt>
  );

  yield* opacityFade(title(), true, 1, 1);
  yield* waitFor(2);
  yield* opacityFade(title(), false, 0, 0.5);
});
