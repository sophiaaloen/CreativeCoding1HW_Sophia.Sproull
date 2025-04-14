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

var mousex = 0;
var mousey = 0;
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600,600);
    shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
    shape3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
    createCharacter(200,350)
}

function draw()
{
    background(255,255,255)
  
    fill(0,128,0);
    rect(550,375,100,20);
    rect(550,225,100,20);
  
    fill(0,0,255);
    drawCharacter();
    characterMovement();
   
    fill(255, 0, 0);
    circle(shape1X, shape1Y, 10);
    shape1X += shape1XSpeed;
    shape1Y += shape1YSpeed;
    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0)
    {
        shape1Y = height;
    }
    
    circle(shape2X, shape2Y, 10);
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

    circle(shape3X, shape3Y, 10);
    shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;
    if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }

    if(characterX > width && characterY > width-375)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    square(mouseShapeX, mouseShapeY, 75);
}

function characterMovement()
{
    if (keyIsDown(w))
    {
        characterY -= 15;   
    }
    if(keyIsDown(s))
    {
        characterY += 15;   
    }
    if(keyIsDown(a))
    {
        characterX -= 15;   
    }
    if(keyIsDown(d))
    {
        characterX += 15;   
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    circle(characterX, characterY, 25);
}

function mouseClicked() 
{  
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}