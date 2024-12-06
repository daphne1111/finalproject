
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (let x = -100; x < width; x += 10) {
    for (let y = -100; y < height; y += 10) {
      noStroke();
  fill(0,random(60,90));
  square(x+mouseY*0.1,y+mouseX*0.1,9+sin(frameCount*0.01));
}
  }}

function loading(){
  
}