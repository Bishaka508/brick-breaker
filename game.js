var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var a = canvas.width / 2;

var b = canvas.height - 30;
var da = 2;
var db = -2;
var ballRadius = 10;//radius of the drawn circle
var paddleHeight = 20;
var paddleWidth = 87;
var paddleX = (canvas.width - paddleWidth) / 2;


var brickRowNum = 10;
var brickColumnNum = 9;
var brickWidth = 75;
var brickHeight = 22;
var brickPadding = 7;
var bricksetTop = 30;
var bricksetLeft = 30;

var leftPress = false;
var rightPress = false;

var bricks = [];
for (var c = 0; c < brickColumnNum; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowNum; r++) {
    bricks[c][r] = { a: 0, b: 0, status: 1 };//status 1 means draw brick.
  }
}


var score = 0;
var highScore = localStorage.getItem("highScore"); 

var lives = 3;

const brickHit = new Audio();
brickHit.src = "sounds/s2.mp3";

const paddleHit = new Audio();
paddleHit.src = "sounds/boing.mp3"

const gameOver = new Audio();
gameOver.src = "sounds/gameover.mp3";



function drawBall() {
  //for the ball
  ctx.beginPath();
  ctx.arc(a, b, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeColor
  ctx.closePath();
}

function drawPaddle() {
  //for drawing the paddle
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "rgb(224, 205, 93)";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  //for brick drawing through looping
  for (var c = 0; c < brickColumnNum; c++) {
    for (var r = 0; r < brickRowNum; r++) {
      if (bricks[c][r].status == 1) {//if the status is zero the bricks will not show 
        var brickA = (c * (brickWidth + brickPadding)) + bricksetLeft;
        var brickB = (r * (brickHeight + brickPadding)) + bricksetTop;
        bricks[c][r].a = brickA;
        bricks[c][r].b = brickB;
        ctx.beginPath();
        ctx.rect(brickA, brickB, brickWidth, brickHeight);//brickA and brickB are the coordinates which is used for placing the  bricks in right manner.
        ctx.fillStyle = "rgb(231, 233, 124)";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);//use clearRect to remove the ball trail  
  drawBall();
  drawPaddle();
  drawBricks();
  drawScore();
  collisionDetect();
  drawLives();
  
  a += da;
  b += db;
  if (a + da > canvas.width - ballRadius || a + da < ballRadius)//subracting ballRadius from width for proper collision 
  {
    da = -da;//reversed

  }

  if (b + db < ballRadius) //subracting ballRadius from height for proper collision detect
  {
    db = -db;//reversed

  } else if (b + db > canvas.height - ballRadius) {
    if (a > paddleX && a < paddleX + paddleWidth) {
      paddleHit.play();
      db = -db;
    }

    else {
      lives--;
      if (!lives) {
        gameOver.play();
        alert("GAME OVER!! YOUR CURRENT SCORE IS  " + score + " POINTS.");
        
        document.location.reload();
      }
      else {
        a = canvas.width / 2;
        b = canvas.height - 30;
        da = 2;
        db = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }



  //key pressed left and right
  if (rightPress) {
    paddleX += 9;// the speed going to right side of the canvas
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  }
  else if (leftPress) {
    paddleX -= 9;//the speed going to left side of the canvas
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

}

document.addEventListener("keyup", keyRelease, false);
document.addEventListener("keydown", keyPress, false);
document.addEventListener("mousemove", mouseUser, false);
//for curser
function mouseUser(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
//when key is released
function keyRelease(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPress = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPress = false;
  }
}

//when key is pressed
function keyPress(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPress = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPress = true;
  }


}

function collisionDetect() {
  for (var c = 0; c < brickColumnNum; c++) {
    for (var r = 0; r < brickRowNum; r++) {
      var y = bricks[c][r];//y stores brick object
      if (y.status == 1) {
        if (a > y.a && a < y.a + brickWidth && b > y.b && b < y.b + brickHeight) {//conditions for center of the ball to be inside the brick
          brickHit.play();
          db = -db;
          y.status = 0;
          score++;

        }
        if (score == brickRowNum * brickColumnNum) {
          alert("YOU WIN, CONGRATULATIONS!");
          document.location.reload();//reloads the page and starts the game again.
          clearInterval(interval);
        }
      }
    }
  }
}


function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("Score: " + score, 8, 20);//8 and 20 are the coordinates where the text will be placed on the canvas.
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

var interval = setInterval(draw, 10);



