var inc = 0.01;
var start = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    stroke(255);
    //noFill();

    // BEGIN SHAPE TO CONNECT DOTS //
    beginShape();
    var xoff = start;
    // X AXE //
    for (var x = 0; x < width; x++) {
        stroke(255);
        // Y AXE //
        var y = noise(xoff) * height;
        // Is equivalent of "map(noise(0), 0, 1, 0, height)"
        vertex(x, y);

        // AMPLITUDE //
        xoff += inc;
    }
    endShape();

    start += inc;
}
