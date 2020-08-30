const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var gr1, gr2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(255,255,255);

  Engine.update(engine);
}