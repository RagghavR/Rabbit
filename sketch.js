var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  if (rabbit.x < 34){
    rabbit.x = 34;
  }
  if (rabbit.x > 366){
    rabbit.x = 366;
  }
  
  if (frameCount%80===0){
    leaf();
  }
  if (frameCount%80===40){
    apples();
  }
  drawSprites();
}
function apples(){
  apple = createSprite(random(34,367),-20,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 5;
  apple.lifetime = 90;
  apple.scale = 0.05;
}
function leaf(){
  leaves = createSprite(random(34,367),-20,10,10);
  leaves.addImage(leavesImg);
  leaves.velocityY = 5;
  leaves.lifetime = 90;
  leaves.scale = 0.05;
}