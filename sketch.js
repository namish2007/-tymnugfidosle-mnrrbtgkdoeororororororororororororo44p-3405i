const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(160,300,50,50);
   box3 = new Box(150,260,50,50);
    box2 = new Box(250,300,50,50);
    Ground = new ground(600,height,1200,20);
    pigs1 = new Pigs(200,300);
    log1 = new log(205,280,205,PI/2);
    pig2 = new Pigs(190,240);
    box4 = new Box(260,260,50,50);
    log2 = new log(205,220,205,PI/2);
    log3 = new log(200,180,102,PI/3);
    box5 = new Box(205,200,50,50);
    Bird = new bird(100,100);
  log4 = new log(230,180,102,PI/3);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   Ground.display();
   pigs1.display();
box2.display();
log1.display();
pig2.display();
box3.display();
box4.display();
log2.display();
log3.display();
box5.display();
Bird.display();
log4.display();
}