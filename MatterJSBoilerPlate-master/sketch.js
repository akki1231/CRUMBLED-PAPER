
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var paperball;
 var bottom,right,left;
 var ground;
 var world;
 var engine;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bottom=createSprite((width/2)+150,655,200,10);
	bottom.shapeColor="red";

	right=createSprite((width/2)+250,615,10,100);
	right.shapeColor="red";

	left=createSprite((width/2)+50,615,10,100);
	left.shapeColor="red";

	ground=new Ground(width/2,670,width,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new paper(200,450,40,30);

	Engine.run(engine);
  
}


function draw() {
  
rectMode(CENTER);
  background(0);
  paperball.display();
  ground.display();
  drawSprites();
}
function keypressed(){
if(keyCode === UP_ARROW)
{
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
}
}