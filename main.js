const game = new Game();
let song;
let gameStart = false;
let paused = false;
let gameOver = false;

function preload() {
  console.log("happening?")
  console.log("please work?")
  game.preloadGame();
  soundFormats('mp3');
  song = loadSound('sound/unicorn.mp3');
}

function setup() {
  createCanvas(850, 750);
  game.setupGame();
}

function draw() {
  game.drawGame();
  
}

function keyPressed() {
  if (gameStart === false && keyCode === 32) {
    gameStart = true;
    song.play();
  }

  if (gameStart === true && frameCount > 9780 && !song.isPlaying()) {
    song.play();
  }

  if (gameOver === true && gameStart === false && keyCode === 13){
    gameStart = true;
    song.play();
  }

  if (keyCode === 13) {
    document.location.reload();
  }

  if (keyCode === 32) {
     game.player.jump();
  }

  if (keyCode === 39) {
    game.player.x += 40;
  }

  if (keyCode === 37) {
    game.player.x -= 40;
  }


}

