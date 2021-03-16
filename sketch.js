const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drop;
var drops = [];
var maxDrops = 100


function preload(){
    
}

function setup(){
   var canvas = (200, 1200);
   engine = Engine.create();
   world = engine.world;
 if(frameCount % 100 === 0){
    for (var i = 0; i<maxDrops; i++){
        drops.push((new Drops(random(0,200), random(0,200))));
        
     }
 }
    
}

function draw(){
    Engine.update(engine);
    background("black");
for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
}
}   

