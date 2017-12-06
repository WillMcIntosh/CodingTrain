var tree = [];

function setup(){
    // put setup code here
    createCanvas(480, 480);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    root = new Branch(a,b);

    tree[0] = root;


}

function mousePressed() {
    for (var i = tree.length - 1; i >= 0; i--) {
        // prevent drawing the root and previously
        // drawn branches over and over
        if (!tree[i].finished) {
            tree.push(tree[i].branchA());
            tree.push(tree[i].branchB());
        }
        tree[i].finished = true;
    }
}

function draw(){
    // put drawing code here
    background(0);
    for (var i = 0; i <tree.length; i++){
        tree[i].show();
    }

}


