var hr;
var min;
var sec;


function setup() {
  createCanvas(800,500);
 angleMode(DEGREES);
}

function draw() {
  background(0); 

  hr = hour();
  min = minute();
  sec = second();
  d = day();
  m = month();
  yr = year();

  
  fill(255);
  textSize(25);
  text("Time-" +hr + "-"+ min +"-"+ sec,280,400);
  
  

  

  translate(200,200);
  rotate(270);



  strokeWeight(2);
  stroke("white");
  noFill();
  s = map(sec,0,59,0,360);
  arc(0,0,300,300,0,s);

  push();
  rotate(s);
  line(0,0,95,0);
  pop();  

  strokeWeight(4);
  stroke(rgb(242, 101, 101));
  noFill();
  m = map(min,0,60,0,360);
  arc(0,0,292,292,0,m);

  push();
  rotate(m);
  line(0,0,87,0);
  pop(); 

  strokeWeight(5.5);
  stroke(rgb(255, 0, 0));
  noFill();
  h = map(hr%12,0,12,0,360);
  arc(0,0,280,280,0,h);

  push();
  rotate(h);
  line(0,0,75,0);
  pop();
  drawSprites();
}