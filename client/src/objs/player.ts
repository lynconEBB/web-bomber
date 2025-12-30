import {k} from "../core/engine.ts";
import {findWorldContainer} from "kaplanck";
import {Room} from "colyseus.js";
import type { MyRoomState, PlayerState } from "@web-bomber/shared";
import type {GameObj} from "kaplay";

const players: Record<string, GameObj> = {};

export const createPlayer = (_room: Room<MyRoomState>, state: PlayerState) => {
  const worldContainer = findWorldContainer(k);
  if (!worldContainer) return;

/*
  worldContainer.add([
    "player",
    k.kpPos(50, 0),
    k.kpRotate(0),
    k.kpCircleShape({ radius: 10,draw: true }),
    k.kpBody({ type: "dynamic" }),
    k.kpFixture(),
  ]);
*/

  const player = worldContainer.add([
    k.kpPos(state.x, state.y),
    k.kpRotate(0),
    k.color(k.Color.RED),
    k.kpCircleShape({ radius: 10,draw: true }),
    k.kpBody({ type: "dynamic", gravityScale: 0 }),
    k.kpFixture(),
  ]);

  players[state.sessionId] = player;

  return player;
}

export const removePlayer = (sessionId: string) => {
  players[sessionId]?.destroy();
}