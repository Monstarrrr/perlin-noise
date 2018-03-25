function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);

    for (var x = 0; x < width; x++) {
        stroke(255);
        point(x, random(height));
    }
}
