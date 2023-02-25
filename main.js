var song1="";
var song2="";
var leftWristX="";
var leftWristY="";
var rightWristX="";
var rightWristY="";


function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas= createCanvas(650,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet= ml5.posenet(video, modelLoaded);

    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model Is Loaded");
}

function gotPoses(results){
console.log(results);

if (results.length>0){
    leftWristX= results[0].pose.leftWrist.x;
    leftWristY= results[0].pose.leftWrist.y;

    console.log("Left Wrist X= "+ leftWristX);
    console.log("Left Wrist Y= "+ leftWristY);

    rightWristX= results[0].pose.rightWrist.x;
    rightWristY= results[0].pose.rightWrist.y;

    console.log("Right Wrist X= "+ rightWristX);
    console.log("Right Wrist Y= "+ rightWristY);
}
}

function draw(){
image(video,0,0,650,500);
}