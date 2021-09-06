
function MovingObject(obj, pos, radius, vel, color) {
    this.obj = obj;
    obj =  {
      pos: pos,
      vel: vel,
      radius: radius,
      color: color
    }
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.obj.pos[0],
        this.obj.pos[1],
        this.obj.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
}

MovingObject.prototype.move = function() {
     pos = this.obj.pos;
     vel = this.obj.vel;
     pos[0] += vel[0];
     pos[1] += vel[1];
}

module.exports = MovingObject;


// let o = new MovingObject({pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"})
// console.log(o);