const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var world;
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  var divisionHeight=300;
  var particles=[]
  var plinkos=[]
  var divisions=[]
//  var ground = new Ground(600, 780, 480, 10)
var ground = new Ground(600, height, 1200, 20)
 }

function draw() {
  background(255,255,255); 
  ground.display(); 
  for (var j = 40;j <=width; j=j+50){
    plinko.push(new.Plinko(j,75))
   }
   for (var j = 15; j<=weidth-10; j=j+50){
       plinko.push(new.Plinko(j,175))
   }
  for (var j=0; j < particles.lenght;j++){
    particles[j].display();
 }
 for (var k=0; k< divisions.length;k++){
     divisions[k.display]
 }
  for(var k=0; k<=weidth;k = k+80){
    divison.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
  }
  drawSprites();
}