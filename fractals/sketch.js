function setup(){
    // put setup code here
    createCanvas(480, 480);
    background (0);
    stroke(255);
}

var len = 100;

function draw(){
    // put drawing code here
    // translate the origin to bottom center
    translate(240, 480);
    // draw the trunk
    line(0, 0, 0, -len);

    fractal(len);
}

function fractal(len){
    console.log(len);
    // move origin and draw a branch
    translate(0, -len);

    // decrease len size
    len = len * 0.67
    
    // save this origin location
    push();
    rotate(PI/4);
    line(0, 0, 0, -len);
    // go back to origin and make the
    // left hand line
    pop();
    rotate(-PI/4);
    line(0, 0, 0, -len);

    if (len > 40){
        fractal(len);
    }

}
