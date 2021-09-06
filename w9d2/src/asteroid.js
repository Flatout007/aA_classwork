const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


function Asteroid(options) {
  options.pos = options.pos;
  options.color = '#6969f4';
  options.radius = 7;
  options.vel = Util.randomVec(5);
  MovingObject.call(this, options)
  
}



Util.inherits(Asteroid, MovingObject);



module.exports = Asteroid;