var inc = 0.01;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}

function draw() {
    // BEGIN LOADPIXELS TO CHOOSE INDIVIDUALY PIXEL COLOR //
    loadPixels();

    background(51);
    stroke(255);
    noFill();

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
