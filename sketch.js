var bg, astronaut, astro_sleep, astro_brush, astro_gymn, astro_eating, astro_bathing, astro_moving

function preload(){
  bg=loadImage("images/iss.png")
  astro_sleep=loadAnimation("images/sleep.png")
  astro_brush=loadAnimation("images/brush.png")
  astro_gymn=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  astro_eating=loadAnimation("images/eat1.png","images/eat2.png")
  astro_bathing=loadAnimation("images/bath1.png","images/bath2.png")
  astro_moving=loadAnimation("images/move1.png","images/move2.png")
}

function setup() {
  createCanvas(600, 500);
  astronaut=createSprite(300,250)
  astronaut.addAnimation("person",astro_sleep)
  
  astronaut.scale=0.1
  
 
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",astro_brush)
    astronaut.changeAnimation("brushing")
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",astro_gymn)
    astronaut.changeAnimation("gym")
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",astro_eating)
    astronaut.changeAnimation("eat")
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath",astro_bathing)
    astronaut.changeAnimation("bath")
  }

  if(keyDown("m")){
    astronaut.addAnimation("move",astro_moving)
    astronaut.changeAnimation("move")
  }

}