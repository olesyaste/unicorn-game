class Game {
  constructor() {
    this.clouds = [];
  }
  preloadGame() {
    this.playerImg = loadImage("./images/unicorn.png");
    this.cloudImg = loadImage("./images/good-cloud.png");
  }
  setupGame() {
    this.player = new Player();
    this.player.image = this.playerImg;
    this.cloud = new Cloud();
    this.cloud.image = this.cloudImg;
  }

  drawGame() {
    clear();
    background(162, 235, 242);
    this.player.drawPlayer();
    this.cloud.drawCloud();

    if (frameCount % 40 === 0) {
      this.clouds.push(new Cloud(this.cloudImg));
    }

    this.clouds.forEach((cloud) => {
      cloud.drawCloud();
      if (this.player.collision(cloud)) {
        console.log("hit!");
      }
    });
  }
}
