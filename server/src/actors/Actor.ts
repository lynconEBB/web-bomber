import {MyRoom} from "../rooms/MyRoom";

export class Actor {
  protected room: MyRoom;

  constructor(room: MyRoom) {
    this.room = room;
  }

  public id: string;
  public update();
}