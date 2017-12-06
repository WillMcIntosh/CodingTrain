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
    angle = slider.value();
    stroke(255);
    // translate the origin to bottom center
    translate(240, height);

    branch(100);

}

function branch(len){

    line(0, 0, 0, -len);
    translate(0, -len);
    
    if (len > 4){
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


