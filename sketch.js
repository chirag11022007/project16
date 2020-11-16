var monkey , monkey_running;

var ground;

var bananaImage, obstacle, obstacleImage;

var foodGroup, obstacleGroup;

var survivalTime=0;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}

function setup() {
  createCanvas(600, 600);
  
  ground = createSprite(300, 620, 600, 25);
  
  monkey = createSprite(50, 520);  
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.15;
}

function draw() {
  
  background("skyBlue");
  
  if (keyDown("space") && monkey.y >= 400) {
      monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 100) {
      ground.x = ground.width/2;
  }
   
  survivalTime=Math.ceil(frameCount/frameRate());
  textSize(25);
  fill("white");
  text("Survival Time: "+survivalTime, 300, 50)
  
  bananaFunction();
  
  spawnObstacles();
  
  console.log(monkey.y);
  
  monkey.collide(ground);
  
  drawSprites();
}

function spawnObstacles(){
  if (World.frameCount % 300 === 0) {
    obstacle = createSprite(600, 170);
    obstacle.addImage(obstacleImage);
    obstacle.y = Math.round(random(565, 565));
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.setLifetime = 150;
    obstacleGroup.add(obstacle);
  }
}

function bananaFunction(){
  if (World.frameCount % 80 === 0) {
    banana = createSprite(600, 170);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.2;
    banana.velocityX = -3;
    banana.setLifetime = 150;
    foodGroup.add(banana);
  }
}