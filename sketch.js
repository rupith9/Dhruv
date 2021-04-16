var nobita, gian;
var ground;
var obstacles, obstaclesGroup;
var nobitaAni;

function preload(){
  nobitaAni = loadAnimation("nobita_1.png", "nobita_2.png");
}
  


function setup(){
    createCanvas(600, 300);

    nobita  = createSprite(100, 250, 15, 50);
    nobita.addAnimation("nobisad",nobitaAni);

    gian = createSprite(50, 245, 50, 100);
    
    ground  = createSprite(200, 295, 1500, 10);
    ground.shapeColor = "Brown";

    obstaclesGroup = new Group();
}

function draw() {
  background("white");

    nobita.collide(ground);
    gian.collide(ground);

  ground.velocityX = -3;

    if(ground.x <0){
    ground.x = ground.width/2;
    }

 if (keyDown("space")){
  nobita.velocityY = -6;
  }
  nobita.velocityY = nobita.velocityY+0.6;
 
  spawnObstacles();

 drawSprites();
}

function spawnObstacles(){
    if(frameCount%50 === 0){
        obstacles = createSprite(500,Math.round(random(100, 280)), 30, 10);
        obstacles.velocityX = -5;
        obstacles.lifetime = 100;

       obstaclesGroup.add(obstacles);
    }
}