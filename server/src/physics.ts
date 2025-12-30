import {CircleShape, Vec2, World} from "planck";

export class PhysicsWorld {
  private world: World;

  constructor() {

    this.world = new World({
      gravity: Vec2(0,100)
    });
  }

  update(dt: number) {
    this.world.step(1 / 30);
  }

  createBody() {
    const body = this.world.createBody({
      position: Vec2(50,0),
      angle: 0,
      type: "dynamic",
      linearDamping: 0,
      angularDamping: 0,
      gravityScale: 100
    })

    body.createFixture({
      shape: new CircleShape(12),
    });

    return body;
  }
}




