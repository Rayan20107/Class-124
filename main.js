randomnumberred=Math.floor(Math.random()*255);

randomnumberblue=Math.floor(Math.random()*255);

randomnumbergreen=Math.floor(Math.random()*255);

function setup()
{
    video=createCapture(VIDEO);
    video.size(600, 500);
    Mycanvas=createCanvas(600, 400);
    Mycanvas.position(650, 100);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', results);
}

function modelLoaded()
{
    console.log("Model has been loaded");
}

function results(res)
{
    if (res.length > 0) {
        console.log(res);
    }
}

function draw()
{
    background(randomnumberred, randomnumbergreen, randomnumberblue);
}

function preload()
{

}