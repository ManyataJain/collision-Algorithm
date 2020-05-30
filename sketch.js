var o1,o2;


function setup() {
  createCanvas(1200,800);
  o1=createSprite(400, 200, 50, 50);
  o1.shapeColor="green";
  o2=createSprite(800,30,80,60);
  o2.shapeColor="green";
}

function draw() {
  background(0); 
 o2.x=mouseX; 
 o2.y=mouseY; 
 
 if(o2.x-o1.x<o2.width/2+o1.width/2 &&
  o1.x-o2.x<o2.width/2+o1.width/2 &&
  o2.y-o1.y<o2.height/2+o1.height/2 &&
  o1.y-o2.y<o2.height/2+o1.height/2 ){
    o1.shapeColor="red"
    o2.shapeColor="red"
 }else{
    o1.shapeColor="green"
    o2.shapeColor="green"
 }
  drawSprites();
}