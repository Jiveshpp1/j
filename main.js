function preload(){

}

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(400,300);
    video = createCapture(VIDEO);

}

function draw(){
    image(video,0,0,440,600)
    circle(300,300,200);
    describe("A circle with a red outline")  
    rect(40,400,30,50)
     
}