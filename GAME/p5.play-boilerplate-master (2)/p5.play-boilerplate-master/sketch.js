var bg,bgImg,player,obstacle,invisibleground,playerr
var startButton,startButtonimg
var gameState="INTRO"

function preload(){
bgImg=loadImage("lavabg.jpg")  




startButtonimg=loadImage("STARTBUTTON.png")
playerRUN=loadAnimation("minerIMG/RUN1.png","minerIMG/RUN2.png","minerIMG/RUN3.png","minerIMG/RUN4.png")
playerStand=loadAnimation("minerIMG/STAND.png")
playerJump=loadAnimation("minerIMG/JUMP.png")
playerMINE=loadAnimation("minerIMG/MINE1.png","minerIMG/MINE2.png","minerIMG/MINE3.png")
playerFall=loadAnimation("minerIMG/FALL1.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

//introText.scale=10
bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
 bg.addImage("ground",bgImg)
 bg.velocityX=-6;
 

bg.scale=3.5
startButton=createSprite(1300,450)
startButton.addImage("text",startButtonimg)
startButton.visible=false


invisibleground=createSprite(windowWidth/2,980,windowWidth,20)

player=createSprite(200,250,50,50)
player.addAnimation("RUN",playerRUN)
player.addAnimation("JUMP",playerJump)
player.addAnimation("MINE",playerMINE)
player.visible=false
player.scale=2



}   
function draw() {
  background(255,255,255);  
  drawSprites();
  if (gameState==="INTRO"){
    bg.velocityX=0;
  textSize(50)
  fill("yellow")
  strokeWeight(5)
  text("HELP THE MINER TO GET GOLD",800,100)
  
text("PRESS SPACE TO ESCAPE FROM OBSTACLE",800,150)
fill("BLUE")
stroke("yellow")
text("CLICK ON START BUTTON TO START THE GAME",800,300)
startButton.visible=true
if(mousePressedOver(startButton)){
gameState="play"


}
  }
if(gameState==="play"){
startButton.visible=false
player.visible=true
bg.velocityX=-6
 player.collide(invisibleground)

  
  player.changeAnimation("RUN",playerRUN)



   if (keyDown==="UP_ARROW"){

    player.changeAnimation("JUMP",playerJump)
    player.velocityY=-10
    }
    player.velocityY=player.velocityY+0.8

if(bg.x<0){
  bg.x=800

}

}

}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      
      default: break;
      
    }
  
      
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;

    obstaclesGroup.add(obstacle);
  }
}














