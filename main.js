noseX=0;44
noseY=0;
difference = 0;
rightwristX = 0;
leftWristX =  0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 160);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#FFD700');
    document.getElementById('square_side').innerHTML = "Width and height of the squre will be =" + difference+"px";
    fill("#00f966");
    stroke('#00f966');
    square(noseX, noseY, difference);


}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX =" + noseX +"noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightWristX = results[0],pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX ="+ leftWristX +"rightWristX="+rightWristX +"difference="+difference);

    }
}