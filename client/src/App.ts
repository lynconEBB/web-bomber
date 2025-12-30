import './style.css'
import kaplay from "kaplay";
import KaPlanckPlugin, { Vec2 } from "kaplanck";

export const k = kaplay({
  background: "#ff00ff",
  global: false,
  maxFPS: 300,
  plugins: [KaPlanckPlugin()]
});

const worldContainer = k.add([
  k.kpWorld({
    gravity: new Vec2(0, 100),
  }),
]);

// 4. Add ground by creating a static body with an edge shape.
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

// 5. Add a ball by creating a dynamic body with a circle shape.
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

/*
k.setGravity(1000);

k.add([
  k.pos(k.center()),
  k.circle(20),
  k.area(),
  k.body()
]);

k.add([
  k.pos(k.center().sub(0,-100)),
  k.rect(1000,10),
  k.anchor("center"),
  k.area(),
  k.body({isStatic: true})
]);
*/


