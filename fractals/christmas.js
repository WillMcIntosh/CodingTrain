var angle = 0;
var maxAngle = 0.1;
var minAngle = 0.8;

var slider;
var stop = false;

function setup(){
    // put setup code here
    createCanvas(480, 480);
    slider = createSlider(0, PI/2, PI/4, 0.1);
}


function draw(){
    // put drawing code here
    background(0);
    angle = 0.2;        // slider.value();
    // console.log(angle);
    stroke(255);

    // for drawing a star
    push();
    translate(width*0.8, height*0.5);
    star(0, 0, 10, 25, 6);
    pop();

    // translate the origin to bottom center
    translate(240, height);

    // draw the trunk
    strokeWeight(4);
    stroke(124, 41, 2);
    line(0, 0, 0, -180);

    // draw the leaves
    strokeWeight(1);
    stroke(23, 140, 25);
    translate(0, -200);
    christmas(100);

}

function christmas(len) {

    for(i = 0; i < 5; i++) {
        // if (len > 10){
            push();
            branch(len*0.67);
            pop();

            push();
            rotate(angle/2);
            branch(len*0.50);
            pop();

            push();
            rotate(-angle/2);
            branch(len*0.50);
            pop();

            push();
            rotate(angle);
            branch(len*0.67);
            pop();

            push();
            rotate(-angle);
            branch(len*0.67);
            pop();
        // }

    }

}

function branch(len) {

    line(0, 0, 0, len);
    translate(0, len);
        if (len > 20){
            push();
            branch(len*0.67);
            pop();

            push();
            rotate(angle/2);
            branch(len*0.50);
            pop();

            push();
            rotate(-angle/2);
            branch(len*0.50);
            pop();

            push();
            rotate(angle);
            branch(len*0.67);
            pop();

            push();
            rotate(-angle);
            branch(len*0.67);
            pop();
        }


}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
