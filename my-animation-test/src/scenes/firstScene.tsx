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

const colours = {
  dark: "#14213d",
  yellow: "#fa9500",
  red: "#ee6c4d",
};

export default makeScene2D(function* (view) {
  const group = createRef<Node>();
  const mainRect = createRef<Rect>();

  view.add(
    <>
      <Layout direction={"column"} width={900} gap={40} layout>
        <Node ref={group}>
          <Rect
            height={200}
            fill={colours.red}
            radius={40}
            justifyContent={"center"}
          >
            <Txt alignItems={"center"}>Batata Jose</Txt>
          </Rect>
          <Rect
            height={200}
            fill={colours.red}
            radius={40}
            justifyContent={"center"}
          >
            <Txt alignItems={"center"}>What is that bruh</Txt>
          </Rect>
        </Node>
        <Rect
          ref={mainRect}
          height={200}
          fill={colours.red}
          radius={40}
          justifyContent={"center"}
        >
          <Txt alignItems={"center"}>Luciano Simoni</Txt>
        </Rect>
      </Layout>
    </>
  );

  yield* slideTransition(Direction.Top);

  yield* all(
    opacityFade(group(), false, 0.2, 1),
    mainRect().fill(colours.yellow, 1)
  );
  yield* waitFor(1);
});
