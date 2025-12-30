import {MapSchema, Schema, type} from "@colyseus/schema";

export class PlayerState extends Schema {
  @type('string')
  public sessionId: string;
  @type("number")
  public x: number = 0;
  @type("number")
  public y: number = 0;
}

export class MyRoomState extends Schema {
  @type({map:PlayerState})
  public players = new MapSchema<PlayerState>();

  @type("string")
  public mySynchronizedProperty: string = "Hello world";
}