function setup() {
  createCanvas(800,400);
 fixedrect =  createSprite(400, 200, 50, 50);
 movingrect =  createSprite(200, 200, 80, 40);
}

function draw() {
  background("red"); 
  movingrect.x = mouseX 
  movingrect.y = mouseY
  if(abs (fixedrect.x-movingrect.x)<movingrect.width/2+fixedrect.width/2&&
  abs (fixedrect.y-movingrect.y)<movingrect.height/2+fixedrect.height/2 ){
    fixedrect.shapeColor = "green"
    movingrect.shapeColor = "green"
  }
  else{
    fixedrect.shapeColor = "blue"
    movingrect.shapeColor = "blue"  
  }
  drawSprites();
}