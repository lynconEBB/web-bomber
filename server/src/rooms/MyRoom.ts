import { Room, Client } from "@colyseus/core";
import { MyRoomState } from '@web-bomber/shared';

export class MyRoom extends Room<MyRoomState> {
  maxClients = 4;
  state = new MyRoomState();


  onCreate (options: any) {
    this.onMessage("type", (client, message) => {
      console.log(message);
      //
      // handle "type" message
      //
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
