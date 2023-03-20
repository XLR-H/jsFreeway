//***** CAR VARIABLES *****
let carX = [600, 600, 600, 600, 600, 600];
let carY = [35, 90, 145, 200, 255, 310];
let carSpeed = [3, 6, 1, 4, 5, 2];
let carW = 80;
let carH = 50;


//***** DRAW CAR ********************
function drawCar(){
  for (let i = 0; i < carImage.length; i++){
    image(carImage[i], carX[i], carY[i], carW, carH);
  }
}

//***** MOVE CAR ********************
function moveCar(){
  for (let i = 0; i < carSpeed.length; i++){
    carX[i] -= carSpeed[i];
  }
}  
  
//***** SNAP CAR ********************
function snapCar(){
  for (let i =0; i < carX.length; i++){
    if(carX[i]<=-100){carX[i]=600}
  }
}
