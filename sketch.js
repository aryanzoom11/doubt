
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    mouseImg=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    catImg=loadAnimation("cat1.png","cat4.png"); 
    catrunning=loadAnimation("cat2.png"); 
    catlastImg=loadAnimation("cat3.png"); 
};

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(200,200,100,20);
garden.addImage(gardenImg);

mouse=createSprite(200,200,20,20);
mouse.addAnimaton(mouseImg);

cat=createSprite(500,200,20,20);
cat.addAnimaton(catImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x <(cat.width-mouse.width)/2){
  cat.velocityX=0;
  cat.addAnimation(catlastImg);
  cat.changeAnimation(catlastImg);

}
text(mouseX+','+mouseY,10,45);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  cat.velocityX=-5;
  cat.addAnimation(catrunning);
  cat.changeAnimation(catrunning);
  

}

}
