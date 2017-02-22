var cir;
var pepe;

function preload() {
    pepe = loadImage("assets/pepe.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
    background(10);
    console.log("Hello World");
    
    
}

function draw() {
    noStroke();
    throbber(5);
    fill(10, 10, 10, 255/7);
    rect(0, 0, windowWidth, windowHeight);
    
}

function throbber(num) {
    
    //rotating pepe
    push();
    translate(windowWidht/2, windowHeigh/2);
    var cir = 360/num*(frameRate%num);
    rotate(radians(cir));
    image(pepe, 0, 0);
    pop();
    
}

function windowRezised() {
    resizeCanvas(windowWidth, windowHeight);
}