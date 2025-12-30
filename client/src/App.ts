import './style.css';
import "./scenes/main.ts";
import {k} from "./core/engine.ts";
import {colyseusSDK} from "./core/colyseus.ts";
import {MyRoomState, PlayerState} from '@web-bomber/shared';
import {getStateCallbacks} from "colyseus.js";
import {createPlayer, removePlayer} from "./objs/player.ts";
import {Vec2} from "kaplanck";

k.add([
  k.kpWorld({
    gravity: new Vec2(0, 10),
  }),
]);

const room = await colyseusSDK.joinOrCreate<MyRoomState>("arena", {
  name: "test",
});

const $ = getStateCallbacks<MyRoomState>(room);

$(room.state).players.onAdd((player: PlayerState, _sessionId) => {
  const actor = createPlayer(room, player);

  $(player).onChange(() =>{
    // console.log(player.x, player.y);
    actor?.setKPPosition({x:player.x, y:player.y});
  });
/*
  $(player).listen("y", (y, prevY) => {
    console.log(actor?.getKPPosition().x);
  });
  $(player).listen("x", (x, prevX) => {
    console.log(x, prevX);
    actor?.kpMoveTo(x, actor?.getKPPosition().y)
  });
*/
});

$(room.state).players.onRemove((_player,sessionId) => {
  removePlayer(sessionId);
});

$(room.state).players.onChange((_player, _sessionId) => {})