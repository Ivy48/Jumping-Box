var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   music=loadSound("music.mp3") ;
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(10,580,360,30);
    block1.shapeColor = "brown";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30)
    block3.shapeColor="red";

    block4 = createSprite(710,580,200,30);
    block4.shapeColor="blue";

    ball = createSprite(random(20,750),100, 40,40);
   
    

}

function draw() {

    background("WHITE");
   
    if(block1.isTouching(ball) ){
        ball.shapeColor ="BROWN";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange"; 
        music.play();  
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";   
        music.play();
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "blue";  
        music.play(); 
    }
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(block1);  
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);
    
    if(keyDown("space")){
        ball.velocityY=4;
        ball.velocityX=4;
    }
 
    

    drawSprites();
}
