/*
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy1;
var ground1;
var stone1;
var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var sling1;


function preload()
{
boy1 = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  boy1=new boy(200,200,200,200);
  ground1=new Ground(10,480,2400,20);
  stone1=new stone(150,350,40,40); 
  tree1=new tree(650,400,400,400);
  mango1=new mango(400,150,40,40);
  mango2=new mango(450,160,40,40);
  mango3=new mango(490,130,40,40);
  mango4=new mango(450,120,40,40);
  mango5=new mango(350,120,40,40);
  mango6=new mango(420,90,40,40);
  //sling1 = new Slingshot(boy1.body,{x:200,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 // Engine.update(engine);
	strokeWeight(4);

	detectcollision(stone,mango1);
	detectcollision(stone,mango2);
	detectcollision(stone,mango3);
	detectcollision(stone,mango4);
	detectcollision(stone,mango5);
	detectcollision(stone,mango6);

  boy1.display();
  ground1.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 // sling1.display();

  mouseDragged();
  mouseReleased();
  drawSprites();


 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
}
function mouseReleased(){
   // sling1.fly();
}
function detectcollision(lstone,lmango){
	mango.Body.Position=lmango.body.position
	stone.Body.Position=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
  matter.Body.setStatic(lmango.body,false);
}
}
*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new boyC(stoneObj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

