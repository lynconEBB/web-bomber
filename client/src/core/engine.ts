import kaplay from "kaplay";
import KaPlanckPlugin from "kaplanck";

export const k = kaplay({
  background: "#528dbc",
  global: false,
  maxFPS: 300,
  plugins: [KaPlanckPlugin()]
});
