var song = "";

function preload(){
    song = loadSound("music.mp3");
}


function setup(){
    ctx = createCanvas(300,270)
    ctx.center();
    ctx.position(400,250)
    video = createCapture(VIDEO);
    
    video.hide();
    
}

function draw(){
    
    background(45);
    image(video,0,0,300,300);
}


function play(){
    song.play();
}