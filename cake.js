class Cake {
    constructor(img) {
      this.height = 50;
      this.width = 50;
      this.x = Math.floor(Math.random() * 600);
      this.y = 0;
      this.images = img;
      this.score = 20;
    }

  drawCake() {
    this.y += 2;
    image(this.images, this.x, this.y, this.width, this.height); 
    text(`Score: ${game.score} / ${this.score}`, 90, 50);
    textSize(30);
    fill(242, 130, 208);
    stroke(4);
  }
  
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;
    if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
      return true;
    }
  }  
}