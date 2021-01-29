var wall,thickness;
var bullet,speed,height;

function setup() {
  createCanvas(1500,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);

}


function draw() {
  background(255,255,255); 
  
  
 if( hasCollide(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness)

if(damage>10){
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0)
}
 }
    drawSprites();
}

function hasCollide(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}