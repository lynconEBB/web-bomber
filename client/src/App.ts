import './style.css';
import "./scenes/main.ts";
import {k} from "./core/engine.ts";
import {createMainScene} from "./scenes/main.ts";
import {colyseusSDK} from "./core/colyseus.ts";
import { MyRoomState } from '@web-bomber/shared';
import {getStateCallbacks} from "colyseus.js";

createMainScene();

const room = await colyseusSDK.joinOrCreate<MyRoomState>("my_room", {
  name: "test",
});

const $ = getStateCallbacks(room);

$(room.state).listen("mySynchronizedProperty", (x, prevX) => {
  console.log(prevX);
  console.log(x);
});

room.send("type", "ola mundo");

k.go("main");