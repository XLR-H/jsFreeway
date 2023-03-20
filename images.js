// ***** GAME IMAGES / SOUNDS
let roadImage;
let actorImage;
let carImages;

let soundHit;
//let soundPoint;

function preload(){
  roadImage = loadImage("images/road.png");
  actorImage = loadImage("images/playerStand.png");
  car1Image = loadImage("images/carRed.png");
  car2Image = loadImage("images/carBlue.png");
  car3Image = loadImage("images/carCyan.png");
  car4Image = loadImage("images/carGreen.png");
  car5Image = loadImage("images/carYellow.png");
  carImage = [car1Image, car2Image, car3Image, car4Image, car5Image, car1Image];
  
  soundHit = loadSound("sounds/ouch.mp3");
  soundPoint = loadSound("sounds/pontos.wav");
  soundBgm = loadSound("sounds/bgm.mp3");
}