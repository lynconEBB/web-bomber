import {PlayerState} from "@web-bomber/shared";
import {Actor} from "./Actor";
import {MyRoom} from "../rooms/MyRoom";
import {Body} from "planck";


export class PlayerActor extends Actor{
  state: PlayerState;
  body: Body

  constructor(room: MyRoom, state: PlayerState, body: Body) {
    super(room);
    this.state = state;
    this.body = body;
    room.state.players.set(this.state.sessionId, this.state);
  }

  public override update() {
    const pos = this.body.getPosition()

    this.state.x = pos.x;
    this.state.y = pos.y;
  }
}

export const createPlayerActor = (room: MyRoom, sessionId: string): PlayerActor => {
  const state = new PlayerState;
  state.x = 50;
  state.y = 0;
  state.sessionId = sessionId;

  const body = room.physicsWorld.createBody();

  return new PlayerActor(room, state, body);
}