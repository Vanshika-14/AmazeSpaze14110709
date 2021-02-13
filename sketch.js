// Game => "AMAZE-SPAZE"

//Database Variable
var database;

//.js File Variables
var form, game, player;

//Rules Astronaut
var ruleGuy;

//Variables To Be Included In The Database
var gameState = 0;
var playerCount = 0;

//Going to Be Created in Database
var allPlayers;

//Normal Variables for Each User and The User Array Too
var user1, user2, user3, users;

//VAR BG
var bg;

//Score
var score;

//Bullet
var bullet;

//Groups
var obstaclesGroup;
var starsGroup;

function preload(){
   //Preloading User's Images!
    user1IMG = loadImage("images/1.png");
    user2IMG = loadImage("images/2.png");
    user3IMG = loadImage("images/3.png");
    //Preloading BGs!
    bgName = loadImage("images/bg1.png");
    bgHello = loadImage("images/bg.png");
    bgEnd = loadImage("images/bgEnd.png");
    bgMove = loadImage("images/bgMove.jpg");
    //Preloading Obstacles
    ob1 = loadImage("images/obs.PNG");
    ob2 = loadImage("images/obs2.jpg");
    ob3 = loadImage("images/obs3.jpg");
    //Preloading Stars for +3 Scores
    stars = loadImage("images/star.png");
    //Preloading 'ruleGuy'
    ruleGuyIMG = loadImage("images/rule.png");
    //Preloading Bullets
    bulletIMG = loadImage("images/Bullet.png");
}

function setup(){

   //Database
   //database = firebase.database();

   //Canvas
   createCanvas(displayWidth - 20, displayHeight - 30);

   //Displaying Users
   user1 = createSprite(displayWidth/2 - 550, displayHeight/2 + 270);
   user1.addImage(user1IMG);
   user2 = createSprite(displayWidth/2 - 50, displayHeight/2 + 270);
   user2.addImage(user2IMG);
   user3 = createSprite(displayWidth/2 + 500, displayHeight/2 + 270);
   user3.addImage(user3IMG);

   //Groups
   obstaclesGroup = new Group();
   starsGroup = new Group();

}

function draw(){

   //Background
   image(bgMove, 0, -displayHeight*4, displayWidth, displayHeight*7);

   //RIGHT_LEFT_ARROWS for User 1
   if(keyDown(RIGHT_ARROW)){
      user1.x = user1.x + 10;
   }
   if(keyDown(LEFT_ARROW)){
      user1.x = user1.x - 10;
   }

   //RIGHT_LEFT_ARROWS for User 2
   if(keyDown(RIGHT_ARROW)){
      user2.x = user2.x + 10;
   }
   if(keyDown(LEFT_ARROW)){
      user2.x = user2.x - 10;
   }

   //RIGHT_LEFT_ARROWS for User 3
   if(keyDown(RIGHT_ARROW)){
      user3.x = user3.x + 10;
   }
   if(keyDown(LEFT_ARROW)){
      user3.x = user3.x - 10;
   }

   //Space Bar
   if(keyDown("Space")){
      bu
   }

   //Displaying The Sprites
   drawSprites();

   //Functions for OBSTACLES and STARS
   spawnObstacles();
   spawnStars();

}

function spawnObstacles(){
   if(World.frameCount % 90 == 0){
   var ob = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
   ob.velocityY = 6;
   var rand = Math.round(random(1, 3));
   switch(rand){
     case 1: ob.addImage(ob1);
       break;
     case 2: ob.addImage(ob2);
       break;
     case 3: ob.addImage(ob3);
       break;
      default : break
  }
  ob.scale = 0.25;
  ob.lifetime = 100;
  obstaclesGroup.add(ob);
  }
}

function spawnStars(){
   if(World.frameCount % 120 == 0){
     var star = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
     star.velocityY = 8;
     star.addImage(stars);
     star.scale = 0.1;
     star.lifetime = 100;
     starsGroup.add(star);
   }
}

function spawnBullets(){
   bullet = createSprite();
}