var xoff1 = 0;
var xoff2 = 10000;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);

    // SET ELLIPSE'S "x" VALUE //
    var x = map(noise(xoff1), 0, 1, 0, width);
    var y = map(noise(xoff2), 0, 1, 0, height);

    // MOVE IN TIME //
    xoff1 += 0.02;
    xoff2 += 0.02;

    // DRAW ELLIPSE //
    ellipse(x, y, 25, 25);
}
