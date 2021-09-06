console.log("Webpack is working");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");
const Game = require("./game.js");


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const game = new Game(canvas);
  const ctx = canvas.getContext("2d");
  const gameView = new GameView(game, ctx)

  gameView.start();
  console.log("DOM fully loaded and parsed");

  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00",
  });

  window.mo = mo;
  window.Game = Game;
  window.GameView = GameView;
  window.MovingObject = MovingObject;
  window.Asteroid = Asteroid;
  window.ctx = ctx;
});