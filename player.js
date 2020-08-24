class Player {
    constructor() {
        this.height = 150;
        this.width = 150;
        this.x = 300;
        this.y = 450;
        this.image;
        this.gravity = 0.4;
        this.velocity = 0;
    }

    collision(cloudInfo) {
        let playerX = this.x + this.width / 2;
        let playerY = this.y + this.height / 2;
        let cloudX = cloudInfo.x + cloudInfo.width / 2;
        let cloudY = cloudInfo.y + cloudInfo.height / 2;
        
        if (dist(playerX, playerY, cloudX, cloudY) < 50) {
          return true;
        }
      }
    drawPlayer() {
        console.log(this.y)
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y >= height - this.height) {
        this.y = (height - this.height);
    }
        image(this.image, this.x, this.y, this.height, this.width);
    }
    jump() {
        console.log("this will be the jump");
        if (this.y === height - this.height) {
          this.velocity = -10;
    }
}
}