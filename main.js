function preload(){}

function setup(){
    canvas= createCanvas(640,480);
    canvas.position(110,270);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);

    stroke(255, 204, 0);
    strokeWeight(4);
    fill('red');
    circle(50,50,70);
    circle(590,50,70);
    circle(50,430,70);
    circle(590,430,70);

    fill('blue');
    rect(85, 40, 470, 20);
    rect(85, 425, 470, 20);
    rect(40, 85, 20, 310);
    rect(580, 85, 20, 310);
}

function take_snapshot(){
    save('frame_image.png');
}