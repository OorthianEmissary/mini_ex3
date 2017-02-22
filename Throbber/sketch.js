var cir;
var pepe;

function preload() {
    pepe = loadImage("assets/pepe.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
    background(10)
    
    
}

function draw() {
    noStroke();
    fill(10, 10, 10, 255/7);
    rect(0, 0, windowWidth, windowHeight)
    console.log("Hello World")
    
}

function throbber() {
    
    //rotating pepe
    push();
    translate(windowWidht/2, windowHeigh/2);
    var cir = 360/9*(frameRate%9);
    rotate(radians(cir));
    image(pepe, 0, 0);
    pop();
    
}

function windowRezised() {
    resizeCanvas(windowWidth, windowHeight);
}