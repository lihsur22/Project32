const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var gr1, gr2;

var stone;

var b1, b2, b3, b4, b5, b6, b7;
var b8, b9, b10, b11, b12;
var b13, b14, b15;
var b16;
var b17, b18, b19, b20, b21;
var b22, b23, b24;
var b25;

var suspend;
var score, bgcolor;

function preload() {
  getTime();
}

function setup() {
  createCanvas(1200,500);

  engine = Engine.create();
  world = engine.world;
  score = 0;
  bgcolor = "#372B2B";

  stone = new Stone(150,250);

  suspend = new Sling(stone.body,{x:150,y:250});

  gr1 = new Ground(530,350,240,10);
  gr2 = new Ground(950,245,180,10);


  //<Tower 1>
  //bottom
  b1 = new Blocc(530,325,1);
  b2 = new Blocc(500,325,1);
  b3 = new Blocc(470,325,1);
  b4 = new Blocc(440,325,1);
  b5 = new Blocc(560,325,1);
  b6 = new Blocc(590,325,1);
  b7 = new Blocc(620,325,1);

  //layer 1
  b8 = new Blocc(530,285,2);
  b9 = new Blocc(500,285,2);
  b10 = new Blocc(470,285,2);
  b11 = new Blocc(560,285,2);
  b12 = new Blocc(590,285,2);

  //layer 2
  b13 = new Blocc(530,245,3);
  b14 = new Blocc(500,245,3);
  b15 = new Blocc(560,245,3);

  //layer 3
  b16 = new Blocc(530,205,4);
  //</Tower 1>

  //<Tower 2>
  //bottom
  b17 = new Blocc(950,220,1);
  b18 = new Blocc(920,220,1);
  b19 = new Blocc(890,220,1);
  b20 = new Blocc(980,220,1);
  b21 = new Blocc(1010,220,1);
  
  //layer 1
  b22 = new Blocc(950,180,2);
  b23 = new Blocc(920,180,2);
  b24 = new Blocc(980,180,2);
  
  //layer 2
  b25 = new Blocc(950,140,3);
  //</Tower 2>
}

function draw() {
  if(bgcolor)
  background(bgcolor);

  Engine.update(engine);

  gr1.display();
  gr2.display();

  stone.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();

  fill("white");
  textSize(20);
  text("Score " + score, 50, 50);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	suspend.pelt();
}

function keyPressed() {
	if(keyCode == 32) {
		Matter.Body.setPosition(stone.body, {x:150,y:250})
		suspend.reset(stone.body);
	}
}

async function getTime() {
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();
  console.log(responsejson);
  var time = responsejson.datetime;
  var hour = time.slice(11,13);
  if(hour >= 06 && hour <= 18) {
      var bg = "#372B2B";
  } else {
      bg = "#0F0F0F";
  }
  bgcolor = bg;
}