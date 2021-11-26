var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background(36,174,255);
  if(keyIsDown(RIGHT_ARROW))
  {
    box.x+=10;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    box.x-=10;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    box.y+=10;
  }
  if(keyIsDown(UP_ARROW))
  {
    box.y-=10;
  }
 drawSprites();
}




