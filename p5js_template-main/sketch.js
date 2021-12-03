var b1;

function setup(){

createCanvas(500,500)
b1 = createSprite(200,200,30,30);
}

function draw(){

background("white");
if(keyIsDown(RIGHT_ARROW)){
    box1.position.x = box.position.x + 5
}

drawSprites();

}