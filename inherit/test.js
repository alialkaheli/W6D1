  // const inherits = require("./inhert.js");

function MovingObject () {}

MovingObject.prototype.move = function (){
  console.log("it moves");
};



// Function.prototype.inherits=function(parent){
//   function Surrogate()  {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };




function Ship () {}
Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constructor = Ship;
// Ship.inherits(MovingObject);

function Asteroid () {}
// Asteroid.inherits(MovingObject);



const s = new Ship();
const a = new Asteroid();
s.move();
// a.move();
