
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    mouseImg=loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
  catImg=loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png");
};

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(200,200,100,20);
garden.addImage(gardenImg);

mouse=createSprite(200,200,20,20);
mouse.addAnimaton(mouseImg);

cat=createSprite(200,200,20,20);
cat.addAnimaton(mouseImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
