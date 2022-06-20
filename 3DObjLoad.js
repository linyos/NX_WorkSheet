let teapot;

function preload() {
  teapot = loadModel('tree.obj', true);
}

let halfW;
let halfH;
let s = 2;
let ax = 0;
let ay = 0;
let x = 0;
let y = 0;


function setup() {
    let canvas = createCanvas(480, 480, WEBGL);
    canvas.parent('#sketch-holder');
    //angleMode(DEGREES);
    halfW = width / 2;
    halfH = height / 2;
    //normalMaterial();    
}

function draw() {
    background(200);
    scale(s);
    translate(x, y);
    rotateX(ax);
    rotateY(ay);
    //normalMaterial(); // For effect
    model(teapot);
}

function mouseWheel(event) {
    s = event.delta < 0 ? s * 2 : s *0.7;
    return false;
}



let px = 0;
let py = 0;
function mousePressed() {
    px = mouseX - halfW;
    py = mouseY - halfH;
    return false;
}

function mouseDragged() {
    const mx = mouseX - halfW;
    const my = mouseY - halfH;
    const dx = mx - px;
    const dy = my - py;
    if(mouseButton === LEFT) {
        ay += (50 * dx / halfW) * 0.4;
        ax += (-90 * dy / halfH)* 0.4;
    }
    else if(mouseButton === RIGHT) {
        x += dx;
        y += dy;

    }
    px = mx;
    py = my;
}