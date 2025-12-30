import { Client } from "colyseus.js";

export const colyseusSDK = new Client(`${location.protocol}//localhost:2567/colyseus`);