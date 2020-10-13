var fixedObj;
var movingObj;




function setup() {
  createCanvas(800,400);
  fixedObj=createSprite(200, 200, 50, 80);
  movingObj=createSprite(400,200,80,50);
  fixedObj.shapeColor="green";
  movingObj.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingObj.x=World.mouseX;
  movingObj.y=World.mouseY;
  if (movingObj.x-fixedObj.x<fixedObj.width/2+movingObj.width/2 
    && fixedObj.x-movingObj.x<fixedObj.width/2+movingObj.width/2
    && movingObj.y-fixedObj.y<fixedObj.height/2+movingObj.height/2 
    && fixedObj.y-movingObj.y<fixedObj.height/2+movingObj.height/2
    ) {
    fixedObj.shapeColor="yellow";
    movingObj.shapeColor="yellow";
    
  } else {
    fixedObj.shapeColor="green";
    movingObj.shapeColor="green";
    
  }

  drawSprites();
}