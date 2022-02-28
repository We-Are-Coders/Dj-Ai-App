BornforThis="";
Undertale_Sans="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    BornforThis = loadSound("The Score - Born For This.mp3");
    Undertale_Sans = loadSound("Sans.mp3");
}

function draw(){
    image(video,0,0,600,530);
}