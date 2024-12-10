
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  x=frameCount;
  y=sqrt(x);
  background(220);
    push();
  fill(255)
  rect(100,200,200,10);
  pop();
  for (let x = -windowWidth; x < windowWidth; x += 10) {
    for (let y = -windowHeight; y < windowHeight; y += 10) {
      noStroke();
  fill(0,random(60,90));
  square(x+mouseY*0.5,y+mouseX*0.5,9+sin(frameCount*0.01));
       if(x>1000){
    x=0;
     y=100;
  }
  push();
  fill(0);
  rect(100,200,y,10);
  pop();
 console.log(x);
}
  }}

function loading(){
  
}
