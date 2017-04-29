function setup(){
  createCanvas(windowWidth,windowHeight, WEBGL);
  
}

function draw(){
  background(0);
  rotateY(frameCount * 0.01+(mouseY *.01));
  rotateX(map(mouseX,0,width,0,5))
  for(var j = 0; j < 20; j++){
    push();
    for(var i = 0; i < 10; i++){
      translate(sin(frameCount * 0.010 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      sphere(8, 6, 4); 
      pop();
    }
    pop();
  }
}

function windowResized(){
  createCanvas(windowWidth,windowHeight);
  
  
}