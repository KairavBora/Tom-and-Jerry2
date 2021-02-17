var garden,cat,mouse
var gardenImg,catImg,catImg2,mouseImg,catImg3



function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png")
    catImg = loadImage("images/cat1.png")
    catImg2=loadImage("images/cat2.png","images/cat3.png")
    mouseImg=loadImage("images/mouse2.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg2=loadImage("images/mouse1.png","images/mouse3.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,400,50,80)
garden.addImage(gardenImg)

cat=createSprite(675,600,100,80);
cat.addImage(catImg);
cat.scale=0.2

mouse= createSprite(300,575,150,80);
mouse.addImage(mouseImg);
mouse.scale=0.2
}

function draw() {

    background("white");
    text(mouseX+','+mouseY,10,45)
    //Write condition here to evalute if tom and jerry collide
keyPressed();

if(cat.x-mouse.x<(cat.width-mouse.width)/2)&&
  {
  cat.addAnimation("catImgEnd",catImg3);
  mouse.addAnimation("mouseImgEnd",mouseImg2);
  cat.velocityX=0
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
  }


}
