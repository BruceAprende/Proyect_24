const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubberObject,stoneObject;
var ironObject;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberObject = new Rubber(700,500,70,70);
    stoneObject = new Stone(200,500,35,50);
    ironObject = new Iron(500,500,70,70);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubberObject.display();
    stoneObject.display();
    ironObject.display();
}