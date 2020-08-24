class Game {
    constructor() {
        this.clouds = [];
        this.cakes = [];
        this.obstacles = [];
    }
    preloadGame() {
      this.backgroundImg = loadImage("../images/rainbow.png")
      this.playerImg = loadImage("../images/unicorn.png");
      this.cloudImg = loadImage("../images/good-cloud.png");
      this.cakeImg = loadImage("../images/cupcake1.png")
      this.obstacleImg = loadImage("../images/bad-cloud.png")
    }
    setupGame() {
      this.background = new Background();
      this.background.image = this.backgroundImg;
      this.player = new Player();
      this.player.image = this.playerImg;
      this.cloud = new Cloud();
      this.cloud.image = this.cloudImg;
      this.cake = new Cake();
      this.cake.image = this.cakeImg;
      this.obstacle = new Obstacle();
      this.obstacle.image = this.obstacleImg;
    }
  
    drawGame() {
      clear();
      this.background.drawBackground();
      //background(162, 235, 242);
      this.player.drawPlayer();
      this.cloud.drawCloud();
      this.cake.drawCake();
      this.obstacle.drawObstacle;
    


      if (frameCount % 70 === 0) {
        this.clouds.push(new Cloud(this.cloudImg));
      }
  
      this.clouds.forEach((cloud) => {
        cloud.drawCloud();
        if (this.player.collision(cloud)) {
          return false;
        } else {
          return true;
        }
      });

      if (frameCount % 130 === 0) {
        this.cakes.push(new Cake(this.cakeImg));
      }
  
      this.cakes.forEach((cake) => {
        cake.drawCake();
      });
    
      if (frameCount % 250 === 0) {
        this.obstacles.push(new Obstacle(this.obstacleImg));
      }
  
      this.obstacles.forEach((obstacle) => {
        obstacle.drawObstacle();
      });

        
    }
  }
