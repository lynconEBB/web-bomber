import {Vec2} from "kaplanck";
import {k} from "../core/engine.ts";

export function createMainScene() {
  k.scene("main", () => {
    const worldContainer = k.add([
      k.kpWorld({
        gravity: new Vec2(0, 100),
      }),
    ]);

    worldContainer.add([
      k.kpPos(k.kpCenter()),
      k.kpRotate(Math.PI * 0.1),
      k.kpEdgeShape({
        v1: new Vec2(-10, 0),
        v2: new Vec2(10, 0),
        draw: true,
      }),
      k.kpBody({
        type: "static",
      }),
      k.kpFixture(),
    ]);

    worldContainer.add([
      k.kpPos(k.kpCenter().sub({ x: k.rand(-10, 10), y: k.rand(10, 15) })),
      k.kpRotate(),
      k.kpCircleShape({
        radius: 1,
        draw: true,
      }),
      k.kpBody({ type: "dynamic" }),
      k.kpFixture({ density: 1, friction: 0.3 }),
      k.offscreen({ destroy: true }),
    ]);
  })
}
