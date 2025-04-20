var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var characterX = 50;
var characterY = 50;
var diameter = 25;

var shape1X = 100;
var shape1Y = 441;
var shape1XSpeed;
var shape1YSpeed;

var shape2X = 411;
var shape2Y = 56;
var shape2XSpeed;
var shape2YSpeed;

var shape3X = 326;
var shape3Y = 4;
var shape3XSpeed;
var shape3YSpeed;

var mouseShapes = [];

function setup()
{
    createCanvas(600,600);

    shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
    shape3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
    
    characterX = 200;
    characterY = 350;
}

function draw()
{
    background(255);

    stroke(0);
    strokeWeight(10);
    line(0, 0, width, 0);
    line(0, 0, 0, height);
    line(0, height, width, height);
    line(width, 0, width, height/2 - 40);
    line(width, height/2 + 40, width, height);

    noStroke();
    fill(0);
    textAlign(CENTER, BOTTOM);
    textSize(18);
    text("EXIT", width - 60, height/2 - 45);

    fill(0,0,255);
    circle(characterX, characterY, diameter);

    if (keyIsDown(w)) characterY -= 5;
    if (keyIsDown(s)) characterY += 5;
    if (keyIsDown(a)) characterX -= 5;
    if (keyIsDown(d)) characterX += 5;

    fill(255, 0, 0);
    circle(shape1X, shape1Y, 30);
    shape1X += shape1XSpeed;
    shape1Y += shape1YSpeed;
    if(shape1X > width) shape1X = 0;
    if(shape1X < 0) shape1X = width;
    if(shape1Y > height) shape1Y = 0;
    if(shape1Y < 0) shape1Y = height;

    fill(255, 165, 0);
    circle(shape2X, shape2Y, 40);
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    if(shape2X > width) shape2X = 0;
    if(shape2X < 0) shape2X = width;
    if(shape2Y > height) shape2Y = 0;
    if(shape2Y < 0) shape2Y = height;

    fill(128, 0, 128);
    circle(shape3X, shape3Y, 35);
    shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;
    if(shape3X > width) shape3X = 0;
    if(shape3X < 0) shape3X = width;
    if(shape3Y > height) shape3Y = 0;
    if(shape3Y < 0) shape3Y = height;


    fill(150, 0, 255);
    for (let i = 0; i < mouseShapes.length; i++) 
    {
        square(mouseShapes[i].x, mouseShapes[i].y, 50);
    }

    if(characterX > width - 40 && characterY > height/2 - 20 && characterY < height/2 + 20)
    {
        fill(0);
        noStroke();
        textSize(20);
        textAlign(CENTER, CENTER);
        text("You Win!", width/2, height/2);
        noLoop();
    }
}

function mouseClicked() 
{  
    mouseShapes.push({x: mouseX, y: mouseY});
}