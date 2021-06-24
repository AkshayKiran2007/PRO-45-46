function preload(){
cr1=loadAnimation("images/Cycle_Race2-0.png","images/Cycle_Race2-1.png","images/Cycle_Race2-2.png","images/Cycle_Race2-3.png","images/Cycle_Race2-4.png","images/Cycle_Race2-5.png","images/Cycle_Race2-6.png","images/Cycle_Race2-7.png",
"images/Cycle_Race2-8.png","images/Cycle_Race2-9.png","images/Cycle_Race2-10.png","images/Cycle_Race2-11.png",
"images/Cycle_Race2-12.png","images/Cycle_Race2-13.png","images/Cycle_Race2-14.png","images/Cycle_Race2-15.png")
bg=loadImage("images/bg.png");
obstacle1=loadImage("images/Hole.jpg");
obstacle2=loadImage("images/Cone.jpg");
ground=loadImage("images/bg12.png")
}


function setup(){
createCanvas(windowWidth,400);
cycle_race=createSprite(windowWidth/4,350);
cycle_race.addAnimation("RUN",cr1);
cycle_race.scale=0.2

path=createSprite(windowWidth/2,380,windowWidth,20);
path.addImage(ground)
//path.addImage(bg);
path.velocityX = -2;
path.x = width/2;
invisiblepath=createSprite(windowWidth/2,390,windowWidth,30)
invisiblepath.visible=false;







}
function draw(){
  background(bg);
  if(path.x < 0 ){
    path.x = width/2;

  }
  if(keyDown("space")){
    cycle_race.velocityY=-2
    
  }
  cycle_race.velocityY+=0.4
  cycle_race.collide(invisiblepath);
  path.invisible=true;
drawSprites()
}