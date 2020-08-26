class Player {
  constructor() {
    this.height = 200;
    this.width = 200;
    this.x = 300;
    this.y = 400;
    this.image;
    this.gravity = 0.8;
    this.velocity = 0.9;
  }

  collision(cloudInfo) {
    //console.log(cloudInfo);
    let playerX = this.x + this.width / 2;
    let playerY = this.y + this.height / 2;
    let cloudX = cloudInfo.x + cloudInfo.width / 2;
    let cloudY = cloudInfo.y + cloudInfo.height / 2;

    if (dist(playerX, playerY, cloudX, cloudY) < 50) {
      this.y = cloudInfo.y - 60;
      return true;
    }
  }

  collision2(obstacleInfo) {
    //console.log(cloudInfo);
    let playerX = this.x + this.width / 2;
    let playerY = this.y + this.height / 2;
    let obstacleX = obstacleInfo.x + obstacleInfo.width / 2;
    let obstacleY = obstacleInfo.y + obstacleInfo.height / 2;

    if (dist(playerX, playerY, obstacleX, obstacleY) < 50) {
      this.y = cloudInfo.y - 60;
      return true;
    }
  }

  drawPlayer() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
    image(this.image, this.x, this.y, this.height, this.width);


  }
  jump() {
    //console.log("this will be the jump");
    this.velocity = -15;
    // }
  }
}
