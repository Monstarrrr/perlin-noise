var inc = 0.02; // Incrementation speed

var zoff = 0;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}

function draw() {

    // BEGIN LOADPIXELS TO CHOOSE INDIVIDUALY PIXEL COLOR //
    loadPixels();

    var yoff = 0;
    for (var y = 0; y < height; y++) {
        var xoff = 0;
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff, zoff) * 255;
            pixels[index+0] = (r + 100) / 2;
            pixels[index+1] = (r + 150) / 2;
            pixels[index+2] = (r + 800) / 2;
            pixels[index+3] = 255;

            xoff += inc;
        }
        yoff += inc;

        zoff += 0.00002;
    }
    
    updatePixels();
}