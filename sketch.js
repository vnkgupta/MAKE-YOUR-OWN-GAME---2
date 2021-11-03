var bg,bgImg;
var player, shooterImg, shooter_shooting;
var heart1 , heart2 ,heart3;
var heart1Img, heart2Img,heart3Img;
var zombieGroup;
var zombie ;
var zombieImg ;  
function preload(){
heart1Img = loadImage("./assets/heart_1.png")
heart2Img = loadImage("./assets/heart_2.png")
heart3Img = loadImage("./assets/heart_3.png")
  zombieImg = loadImage("./assets/zombie.png")
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  heart1=createSprite(displayWidth-50,40,20,20)
  heart1.visible=true
  heart1.addImage(heart1Img)
  heart1.scale=0.4
   heart2= createSprite(displayWidth-100,40,20,20)
   heart2.visible=true
  heart2.addImage(heart2Img)
  heart2.scale=0.4
  heart3 = createSprite(displayWidth-150,40,20,20)
  heart3.visible=true
  heart3.addImage(heart3Img)
  heart3.scale=0.4
//creating the player sprite
 player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

  zombieGroup = new Group();
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

if(zombieGroup.isTouching(player)){
 
  for(var i=0;i<zombieGroup.length;i++){     
       
   if(zombieGroup[i].isTouching(player)){
        zombieGroup[i].destroy()
        } 
  }
 }

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnZombie();
drawSprites();

}

function spawnZombie(){
  if(frameCount % 50 == 0){
    var zombie = createSprite(random(500,1100),random(100,500),40,60)
    zombie.addImage(zombieImg)
    zombie.velocityX = -5 ;
    zombie.scale = 0.15;
    zombie.lifetime = 300;
    zombieGroup.add(zombie);
    zombie.debug = true;
  }
}