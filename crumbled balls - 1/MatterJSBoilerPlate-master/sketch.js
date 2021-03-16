
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700,);

	engine = Engine.create();
	world = engine.world;
 ground=new walls(width/2,100,10,10);
 wall1 = new walls(200,200,10,5);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  wall1.display();

  drawSprites();
 
}



