function setup() {
  createCanvas(500, 400);
  soundBgm.loop();
}

//***** DRAW STUFF *****
function draw() {
  background(roadImage);
  drawActor(); 
  drawQuote();
  moveActor();
  drawCar();
  moveCar();
  snapCar();
  checkCollision();
  showScore();
  scorePoint();
}
