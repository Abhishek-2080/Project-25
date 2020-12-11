
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var paper1;
var dustbinSide1,dustbinSide2,dustbinSide3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,660);
	paper1 = new Paper(100,615,10,{isStatic:false});
	//dustbinSide1 = new Dustbin(600,630,200,20);
	//dustbinSide2 = new Dustbin(500,590,20,100);
	dustbinSide3 =new Dustbin(680,540,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  //keyPressed();
  //dustbinSide1.display();
  ground1.display();
  dustbinSide3.display();
  //ground1.display();
  paper1.display();
 

 
}

function keyPressed(){
	if (keyDown === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:400,y:400});
	//Matter.Body.setStatic(paper1,false)
	//paper1.velocityY=5;
	//paper1.velocityY = paper1.velocityY-5;
	
	}
}

