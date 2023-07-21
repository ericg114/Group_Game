// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');
// const width = 400;
// const height = 400;
// const gridSize = 40;
// const numObstacles = 10;

// let playerX = 0;
// let playerY = 0;
// let destinationX = gridSize - 1;
// let destinationY = gridSize - 1;
// let obstacles = [];

// function initializeObstacles() {
//     for (let i = 0; i < numObstacles; i++) {
//         let x = Math.floor(Math.random() * gridSize);
//         let y = Math.floor(Math.random() * gridSize);
//         obstacles.push({ x, y });
//     }
// }

// function drawGrid() {
//     ctx.clearRect(0, 0, width, height);
//     for (let x = 0; x < width; x += gridSize) {
//         for (let y = 0; y < height; y += gridSize) {
//             ctx.strokeStyle = 'black';
//             ctx.strokeRect(x, y, gridSize, gridSize);
//         }
//     }
// }

// function drawPlayer() {
//     ctx.fillStyle = 'blue';
//     ctx.fillRect(playerX * gridSize, playerY * gridSize, gridSize, gridSize);
// }

// function drawDestination() {
//     ctx.fillStyle = 'green';
//     ctx.fillRect(destinationX * gridSize, destinationY * gridSize, gridSize, gridSize);
// }

// function drawObstacles() {
//     ctx.fillStyle = 'red';
//     for (let obstacle of obstacles) {
//         ctx.fillRect(obstacle.x * gridSize, obstacle.y * gridSize, gridSize, gridSize);
//     }
// }

// function checkCollision(x, y) {
//     return obstacles.some(obstacle => obstacle.x === x && obstacle.y === y);
// }

// function movePlayer(dx, dy) {
//     const newX = playerX + dx;
//     const newY = playerY + dy;

//     if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize && !checkCollision(newX, newY)) {
//         playerX = newX;
//         playerY = newY;
//     }
// }

// initializeObstacles();

// document.addEventListener('keydown', event => {
//     switch (event.key) {
//         case 'ArrowUp':
//             movePlayer(0, -1);
//             break;
//         case 'ArrowDown':
//             movePlayer(0, 1);
//             break;
//         case 'ArrowLeft':
//             movePlayer(-1, 0);
//             break;
//         case 'ArrowRight':
//             movePlayer(1, 0);
//             break;
//     }
// });

// function gameLoop() {
//     drawGrid();
//     drawPlayer();
//     drawDestination();
//     drawObstacles();

//     if (playerX === destinationX && playerY === destinationY) {
//         alert('Congratulations! You\'ve reached the destination!');
//     } else {
//         requestAnimationFrame(gameLoop);
//     }
// }

// gameLoop();

// class Obstacle{
//     constructor(x,y,r,g,b,speed,size,){
//         this.xPos = x;
//         this.yPos = y;
//         this.redValue = r;
//         this.greenValue = g;
//         this.blueValue = b;
//         this.speedValue = speed;
//         this.sizeValue = size;
//     }
// }


function setup(){
    createCanvas(750, 500);
    rectMode(CENTER);
}

let myXPos = 50;
let myYPos = 250;
let obsY = 0;

let coinX = 700;
let coinY = 250;

let score = 0;

function draw(){
    background(0);

    fill(255, 0, 0);
    circle(myXPos, myYPos, 30);


    // if (dist(myXPos, myYPos, coin1X, coin1Y) < 15) {
    //     coin1X = -100;
    //     coin1Y = -100;
    // }

    // if (dist(myXPos, myYPos, coin2X, coin2Y) < 15) {
    //     coin2X = -100;
    //     coin2Y = -100;
    // }

   
    fill(0, 0, 255);
    square(150, 50+obsY, 30);
    square(225, 450+obsY, 30);
    square(300, 50+obsY, 30);
    square(375, 450+obsY, 30);
    square(450, 50+obsY, 30);
    square(525, 450+obsY, 30);
    square(600, 50+obsY, 30);
    

    fill(255, 255, 0);
    circle(coinX, coinY, 30);
    // coinX += coinSpeed;
    // if (coinX > width - 15 || coinX < 15) {
    //     coinSpeed *= -1;
    // }

    // if (dist(myXPos, myYPos, coinX, coinY) < 30) {
    //     gameOver();
    // }

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

function gameOver() {
    noLoop();
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
}

// function restartOption(){
    
// }
 
// function mouseClicked() {

// }

