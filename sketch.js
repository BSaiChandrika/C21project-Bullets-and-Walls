var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1000, 200, thickness, height/2);
  bullet.velocityX=speed
}

function draw() {
  background(0); 

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

}
  
    drawSprites();
}