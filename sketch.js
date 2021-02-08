var balloon;
var balloonImg;
var backgroundImg;
var database;


function preload() {
  backgroundImg = loadImage("Hot Air Ballon-01.png")
  balloonImg = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png", "Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  balloon = createSprite(250, 250, 10, 10);
  balloon.addAnimation("HotAirBalloon", balloonImg);
  balloon.scale = 0.5;
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  if (keyDown(RIGHT_ARROW)) {
    balloon.x += 10;
  }

  if (keyDown(LEFT_ARROW)) {
    balloon.x -= 10;
  }

  if (keyDown(UP_ARROW)) {
    balloon.y -= 10;
    balloon.scale -= 0.01;
  }

  if (keyDown(DOWN_ARROW)) {
    balloon.y += 10;
    balloon.scale += 0.01;
  }
}