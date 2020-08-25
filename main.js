const game = new Game();
let song;

function preload() {
  game.preloadGame();
  soundFormats('mp3');
  song = loadSound('./sound/unicorn.mp3');
  console.log(song)
}

function setup() {
  createCanvas(800, 700);
  game.setupGame();
  //song.play()
}

let score = 700



function draw() {
  game.drawGame();
  
}

function keyPressed() {
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

function mousePressed() {
  song.play();
}