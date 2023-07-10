//***** ACTOR VARIABLES *****
let actorX = 100;
let actorY = 363;
let actorW = 24;
let actorH = 36;
let actorSpeed = 2;
let actorHit = false;
let actorBadQuoteList = ['OH NÃO!!', 'POXA VIDA!!', 'SOCORRO!!', 'POR QUÊ??']
let actorQuote = "OK VOCE CONSEGUE!!"
let playerScore = 0;
let playerHits = 0;

//****** DRAW THE ACTOR ******
function drawActor(){
  image(actorImage, actorX, actorY, actorW, actorH);
}

//****** ACTOR QUOTES ****************
function drawQuote(){
  textSize(18);
  fill(255);
  text(actorQuote, 10, 25);

}

//****** MOVE THE ACTOR ******
function moveActor(){
  if (keyIsDown(UP_ARROW)){
    actorY -= actorSpeed;
   }
  if (keyIsDown(DOWN_ARROW) && actorY<380){
    actorY += actorSpeed;
  }
  if (keyIsDown(LEFT_ARROW) && actorX>-12){
    actorX -= actorSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) && actorX<488){
    actorX += actorSpeed;
  }
}

//****** CHECK FOR COLLISION ******
function checkCollision(){
  for (let i =0; i < carImage.length; i++){
    actorHit = collideRectCircle(carX[i], carY[i], carW, carH, actorX+12, actorY+18, 24);
    if (actorHit){
      actorSave();
    }
  }
}  

//****** IF HIT, TRANSPORT BACK  ******
function actorSave(){
  actorY = 363;
  soundHit.play();
  actorQuote = random(actorBadQuoteList);
  playerHits ++;
  //*****DRAW A RED BOX TO CHECK FOR COLLISION***********  
  // fill(color(255,0,0));
  // rect(actorX, actorY, actorW, actorH);
}

// ****** SHOW PLAYER SCORE  ******
function showScore(){
  textSize(18);
  fill(0,128,200);  
  text(playerScore, 337,25);
  text('PONTOS:', 250,25);
  fill(255,0,0);
  text(playerHits, 450,25);
  text('MORTES:', 360,25);
}

//****** SCORE POINTS  ******
function scorePoint(){
  if (actorY<15){
    playerScore ++;
    actorY = 363;
    soundPoint.play();
  }
}
