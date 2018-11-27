const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
function Asteroid(pos){
  this.pos = pos;
  MovingObject.call(this, pos,[100,100],10,"black");
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;
