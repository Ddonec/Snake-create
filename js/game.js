const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Настройки игры
const tileSize = 20;
const rows = 20;
const cols = 20;
canvas.width = cols * tileSize;
canvas.height = rows * tileSize;

let snake = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 }
];

let direction = { x: 1, y: 0 };
let food = { x: 10, y: 10 };
let score = 0;
let gameInterval;
let isPaused = false;

// Отображение очков
const scoreElement = document.getElementById("score");

// Случайное положение еды
function randomFoodPosition() {
  return {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
  };
}

// Рисование змейки
function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach(segment => {
    ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
  });
}

// Рисование еды
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
}

// Обновление положения змейки
function updateSnake() {
  const newHead = {
    x: snake[0].x + direction.x,
    y: snake[0].y + direction.y
  };

  // Проверка столкновения со стенами или самим собой
  if (newHead.x < 0 || newHead.x >= cols || newHead.y < 0 || newHead.y >= rows || isCollision(newHead)) {
    clearInterval(gameInterval);
    alert("Игра окончена!");
    return;
  }

  snake.unshift(newHead);

  // Проверка столкновения с едой
  if (newHead.x === food.x && newHead.y === food.y) {
    score += 10;
    scoreElement.textContent = score;
    food = randomFoodPosition();
  } else {
    snake.pop();
  }
}

// Проверка столкновений
function isCollision(position) {
  return snake.some(segment => segment.x === position.x && segment.y === position.y);
}

// Отрисовка игры
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
}

// Начать игру
function startGame() {
  gameInterval = setInterval(() => {
    if (!isPaused) {
      updateSnake();
      drawGame();
    }
  }, 200);
}

// Управление игрой
document.getElementById("upBtn").addEventListener("click", () => setDirection(0, -1));
document.getElementById("downBtn").addEventListener("click", () => setDirection(0, 1));
document.getElementById("leftBtn").addEventListener("click", () => setDirection(-1, 0));
document.getElementById("rightBtn").addEventListener("click", () => setDirection(1, 0));
document.getElementById("pauseBtn").addEventListener("click", () => {
  isPaused = !isPaused;
});

function setDirection(x, y) {
  if ((direction.x === 0 && x !== 0) || (direction.y === 0 && y !== 0)) {
    direction = { x, y };
  }
}

// Запуск игры
startGame();
