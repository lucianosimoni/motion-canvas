import {
  Circle,
  Layout,
  Node,
  Rect,
  Txt,
  makeScene2D,
} from "@motion-canvas/2d";
import { ThreadGenerator, all, createRef, waitFor } from "@motion-canvas/core";
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
          <Rect height={200} fill={colours.red} radius={40} />
          <Rect height={200} fill={colours.red} radius={40} />
        </Node>
        <Rect ref={mainRect} height={200} fill={colours.red} radius={40} />
      </Layout>
    </>
  );

  yield* opacityFade(group(), false, 0.2, 1);
  yield* waitFor(1);
});
