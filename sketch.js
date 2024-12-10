
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  
  for (let x = -windowWidth; x < windowWidth; x += 10) {
    for (let y = -windowHeight; y < windowHeight; y += 10) {
      noStroke();
  fill(0,random(60,90));
  square(x+mouseY*0.5,y+mouseX*0.5,9+sin(frameCount*0.01));
}
  }}

function loading(){
  
}
