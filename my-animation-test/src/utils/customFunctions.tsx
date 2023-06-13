import {
  Circle,
  Layout,
  Node,
  Rect,
  Txt,
  makeScene2D,
} from "@motion-canvas/2d";
import { ThreadGenerator, all, createRef, waitFor } from "@motion-canvas/core";

export function* flicker(circle: Circle): ThreadGenerator {
  const defaultColour = circle.fill();
  yield* circle.fill("white", 0.1);
  yield* circle.fill("black", 0.1);
  yield* circle.fill(defaultColour, 0.1);
}

export function* resetPosition(component: any): ThreadGenerator {
  yield* all(component.position.x(0, 1), component.position.y(0, 1));
}

export function* opacityFade(
  component: any,
  fadeIn: boolean,
  to: number,
  time: number
): ThreadGenerator {
  const previousOpacity = component.opacity();

  if (fadeIn) {
    yield* component.opacity(previousOpacity, 0).to(to, time);
  } else {
    yield* component.opacity(previousOpacity, 0).to(to, time);
  }
}
