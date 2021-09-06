let Asteroid = require("./asteroid.js")

function Game(canvas) {
  this.asteroids = [];

  this.DIM_X = canvas.width;
  this.DIM_Y = canvas.height;
  this.NUM_ASTEROIDS = 10;
  this.addAsteroids()
}

Game.prototype.addAsteroids = function () {
  for (let i = 1; i <= this.NUM_ASTEROIDS; i++) {
    let newAst = new Asteroid({
      pos: [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]
    });
    this.asteroids.push(newAst);
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y)
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx)
  }
}

Game.prototype.moveObjects = function () {
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move()
  }
}

module.exports = Game;