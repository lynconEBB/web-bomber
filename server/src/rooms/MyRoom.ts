import { Room, Client } from "@colyseus/core";
import { MyRoomState} from '@web-bomber/shared';
import {PhysicsWorld} from "../physics";
import {Actor} from "../actors/Actor";
import {createPlayerActor} from "../actors/PlayerActor";

export class MyRoom extends Room<MyRoomState> {
  maxClients: number;
  state: MyRoomState;
  physicsWorld: PhysicsWorld;
  private actors: Actor[];

  onCreate (options: any) {
    console.log("Physics world is null");
    this.maxClients = 4;
    this.state = new MyRoomState();
    this.physicsWorld = new PhysicsWorld();
    this.actors = [];

    this.setSimulationInterval(dt => {
      if (this === undefined || this.physicsWorld === undefined) {
        console.log("Physics world is null");
        return;
      }

      this.physicsWorld.update(dt);

      for (const actor of this.actors) {
        actor.update();
      }
    }, 1000 / 30);
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");

    const player = createPlayerActor(this, client.sessionId);
    this.actors.push(player);
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
