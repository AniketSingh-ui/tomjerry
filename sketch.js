var bgImg,tom,tomImg;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    tomImg = loadImg("cat1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(200,300,40,40);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
