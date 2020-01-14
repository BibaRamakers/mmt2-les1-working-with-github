var rood = 100;
var groen = 200;
var blauw = 10;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(100,200,0);
  frameRate(5);
}

function draw() {
  // put drawing code here
  
rood = random(255);
stroke(0,0,0);
strokeWeight(5);
fill(0,0,255);
  ellipse (200, 200, 400, 400);
fill(255,255,0);
  rect(150, 150, 100, 100);
fill(rood,10,20);
  ellipse (200, 200, 50, 50);
  stroke(0,0,0);
line(0,200, 400,200);
}