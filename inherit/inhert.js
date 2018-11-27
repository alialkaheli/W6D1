class MovingObject{
  constructor(){

  }

}
MovingObject.prototype.move = function (){
  console.log("it moves");
};

class Ship extends MovingObject{

}
const s = new Ship();

s.move();
