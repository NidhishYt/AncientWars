




function preload(){
 Bankl1img=loadImage("images/Bank Level-1.png")
 Bankl2=loadImage("images/Bank Level-2-min.jpg")
 Bankl3=loadImage("images/Bank Level-3-min.jpg")
 Bankl4=loadImage("images/Bank Level-4-min.jpg")
 Elefant=loadImage("images/Elefants-min-min.jpg")
 Horses=loadImage("images/Horses-min.jpg")
 MegaKindom=loadImage("images/Mega Kindom.jpeg")
 King=loadImage("images/Npcs-1-min.jpg")
 Queen=loadImage("images/Npsc-2-min.jpg")
 Solgier=loadImage("images/Pcs.jpeg")
}
function setup() {
  canvas=createCanvas(displayWidth,displayHeight);
  var Bankl1=createSprite(28,39,39,39)
}

function draw() {
  background("Red"); 
  text(mouseX+","+mouseY,mouseX,mouseY) 
  drawSprites();
}