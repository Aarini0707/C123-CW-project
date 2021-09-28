function setup(){
    canvas= createCanvas(550,500);
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background('#fafa7a');
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}