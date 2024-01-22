function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
  }
  
  function draw() {
    
    background(255,255,255)
    
    fill(0,255,255)
    rect(60,30,180,20)
    rect(60,250,180,20)
    rect(30,60,20,180)
    rect(250,60,20,180)
  
    fill(255,0,255)
    circle(40,40,50)
    circle(260,260,50)
    circle(260,40,50)
    circle(40,260,50)
    
  }