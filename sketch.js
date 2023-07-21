function setup() {
    createCanvas(750, 500);
    rectMode(CENTER);
}

let myXPos = 50;
let myYPos = 250;

let yPos1 = 50;
let yPos2 = 450;
let topDirection = 1;
let bottomDirection = -1;

let coinX = 700;
let coinY = 250;

let score = 0;
let isGameOver = false;
let win = false;

function draw() {
    background(0);

    //Coin
    fill(255, 255, 0);
    circle(coinX, coinY, 30);
    fill(255, 255, 0);
    
    //Red Circle
    fill(255, 0, 0);
    circle(myXPos, myYPos, 30);
    
    //Collision Detection between Red Circle and Coin
    if (dist(myXPos, myYPos, coinX, coinY) < 30) {
        coinX = -100;
        coinY = -100;
        score += 100;
        Win();
        return;
    }

    //Blue Squares
    fill(0, 0, 255);
    square(150, yPos1, 30);
    square(225, yPos2, 30);
    square(300, yPos1, 30);
    square(375, yPos2, 30);
    square(450, yPos1, 30);
    square(525, yPos2, 30);
    square(600, yPos1, 30);

    //Blue Square Movement
    yPos1 += 7 * topDirection;
    yPos2 -= 7 * bottomDirection;

    if(yPos1<26||yPos1>474){
        topDirection*=-1;
     }
     if(yPos2<26||yPos2>474){
        bottomDirection*=-1;
     }

     //Collision Detection between Red Circle and Blue Square
     for (let i = 0; i < 7; i++) {
        const squareX = 150 + i * 75;
        const distanceTop = dist(myXPos, myYPos, squareX, yPos1);
        if (distanceTop < 30) {
            gameOver();
            return;
        }
    }
    for (let i = 0; i < 7; i++) {
        const squareX = 150 + i * 75;
        const distanceBottom = dist(myXPos, myYPos, squareX, yPos2);
        if (distanceBottom < 30) {
            gameOver();
            return;
        }
    }

    //Score Display
    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Score: " + score, 20, 20);

    //Movement Keys
    if (keyIsDown(LEFT_ARROW)){
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)){
        myXPos += 3;
    }
    if (keyIsDown(UP_ARROW)){
        myYPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        myYPos += 3;
    }
}

//End Screen - Lose
function gameOver() {
    isGameOver = true;
    noLoop();
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2 - 100);
    textSize(20);
    text("Final Score: "+score, width/2, height/2 - 50);
    text("Click to Restart", width/2, height/2 -20);
}

//End Screen - Win
function Win(){
    win = true;
    noLoop();
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("You Win!!", width / 2, height / 2 - 100);
    textSize(20);
    text("Final Score: "+score, width/2, height/2 -50);
    text("Click to Restart", width/2, height/2 - 20);
}


function mouseClicked() {
    if (isGameOver||win) {
        yPos1 = 50;
        yPos2 = 450;
        coinX = 700;
        coinY = 250;
        score = 0;
        myXPos = 50;
        myYPos = 250;
        isGameOver = false;
        win = false;
        loop();
    }
}