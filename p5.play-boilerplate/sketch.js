var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 80);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(200, 200, 80, 40);
  movingrect.shapeColor = "green";
  fixedrect.velocityY = 3;
  movingrect.velocityY = -3;
  fixedrect.debug = true;
  movingrect.debug = true;

}

function draw() {
  background(255,255,255);  
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  /*if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 && fixedrect.x-movingrect.x <
     movingrect.width/2+fixedrect.width/2 ) {

    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

if(movingrect.y-fixedrect.y < fixedrect.height/2+movingrect.height/2 && fixedrect.y-movingrect.y <
    movingrect.height/2+fixedrect.height/2 ) {

   fixedrect.shapeColor = "blue";
   movingrect.shapeColor = "blue";
 }
else{
   fixedrect.shapeColor = "green";
   movingrect.shapeColor = "green";
 }*/

  if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 && fixedrect.x-movingrect.x <
    movingrect.height/2+fixedrect.height/2){
    movingrect.velocityX = movingrect.velocityX*(-1);
    fixedrect.velocityX = fixedrect.velocityX*(-1);
  }

  if(movingrect.y-fixedrect.y < fixedrect.height/2+movingrect.height/2 && fixedrect.y-movingrect.y <
    movingrect.height/2+fixedrect.height/2 ) {
      movingrect.velocityY = movingrect.velocityY*(-1);
      fixedrect.velocityY = fixedrect.velocityY*(-1);
 }
  drawSprites();
}