const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

console.log("Webpack is working!");

const mo = new MovingObject([30, 30],[10, 10],  5, "#00FF00");
window.mo = mo;

const as = new Asteroid([100,20]);
window.as = as;


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  mo.draw(ctx);
  as.draw(ctx);
});
