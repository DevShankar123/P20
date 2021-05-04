var backimg;
var cat,catimg1,catimg2,catimg3,catimg4;
var mouse,mouseimg1,mouseimg2,mouseimg3,mouseimg4;

function preload() {
    //load the images here
    backimg=loadImage("images/garden.png");
    catimg1=loadImage("images/cat1.png");
    catimg2=loadImage("images/cat2.png");
    catimg3=loadAnimation("images/cat3.png");
    catimg4=loadImage("images/cat4.png");
    mouseimg1=loadImage("images/mouse1.png");
    mouseimg2=loadAnimation("images/mouse2.png");
    mouseimg3=loadAnimation("images/mouse3.png");
    mouseimg4=loadImage("images/mouse4.png");
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(880,645);
    cat.addImage("cats",catimg1);
    cat.scale=0.17;
    mouse=createSprite(128,640);
    mouse.addImage("mousec",mouseimg1);
    mouse.scale=0.13;

}

function draw() {

    background(backimg);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("cats",catimg4);
        cat.changeAnimation("cats");
       mouse.x=80;
       
    }
    
    
  
   if(cat.x==750){
    mouse.addAnimation("mousex",mouseimg3);
    mouse.changeAnimation("mousex");
  }
  if(mouse.x==80){
    mouse.addAnimation("mouseb",mouseimg4);
    mouse.changeAnimation("mouseb")}

    
    drawSprites();
    
  }
    
    


function keyPressed(){

  //For moving and changing animation write code here
 
  
   if(keyCode==LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catr",catimg3);
      cat.changeAnimation("catr");
      mouse.addAnimation("mouset",mouseimg2);
      mouse.changeAnimation("mouset");
      }
    }




