const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 50, width: 30, height: 30, color: 'red' };
let item = { x: Math.random()*570, y: Math.random()*370, width: 20, height: 20, color: 'yellow' };
let score = 0;
const scoreDisplay = document.getElementById("score");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // item
  ctx.fillStyle = item.color;
  ctx.fillRect(item.x, item.y, item.width, item.height);
}

function checkCollision() {
  if (
    player.x < item.x + item.width &&
    player.x + player.width > item.x &&
    player.y < item.y + item.height &&
    player.y + player.height > item.y
  ) {
    score++;
    scoreDisplay.textContent = score;
    // respawn item
    item.x = Math.random()*570;
    item.y = Math.random()*370;
  }
}

document.addEventListener('keydown', (e) => {
  if(e.key === "ArrowRight") player.x += 10;
  if(e.key === "ArrowLeft") player.x -= 10;
  if(e.key === "ArrowUp") player.y -= 10;
  if(e.key === "ArrowDown") player.y += 10;
  draw();
  checkCollision();
});

draw();
