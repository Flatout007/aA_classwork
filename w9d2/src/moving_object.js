function MovingObject(options) {

    this.pos    = options.pos;
    this.x      = options.pos[0];
    this.y      = options.pos[1];
    this.vel    = options.vel;
    this.xVel   = options.vel[0];
    this.yVel   = options.vel[1];
    this.radius = options.radius;
    this.color  = options.color;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color
  ctx.beginPath()

  ctx.arc(
    this.x,
    this.y,
    this.radius,
    0,
    2 * Math.PI,
    false
  )
  ctx.fill()
}

MovingObject.prototype.move = function () {
  this.x += this.xVel
  this.y += this.yVel
}

module.exports = MovingObject;