class Game {
    constructor() {
        this.clouds = [];
        this.cakes = [];
        this.obstacles = [];
        this.score = 0;
        this.level = 1;
        this.lives = 3;
        this.shadesCount = 0;

    }

    preloadGame() {
      this.backgroundImg = loadImage("../images/sky.png")
      this.playerImg = loadImage("../images/unicorn.png");
      this.cloudImg = loadImage("../images/good-cloud.png");
      this.obstacleImg = loadImage("../images/bad-cloud.png");
      this.cakesImg = [ 
        { src: loadImage("../images/cupcake1.png"),},
        { src: loadImage("../images/cupcake2.png"),}, 
        { src: loadImage("../images/cupcake3.png"),},
        { src: loadImage("../images/cupcake4.png"),},
    ];
    }

    setupGame() {
      this.background = new Background();
      this.background.image = this.backgroundImg;
      this.cloud = new Cloud();
      this.cloud.image = this.cloudImg;
      this.cake = new Cake();
      this.cake.images = this.cakesImg[this.getRandomCake()].src;
      this.obstacle = new Obstacle();
      this.obstacle.image = this.obstacleImg;
      this.player = new Player();
      this.player.image = this.playerImg;
    }

    getRandomCake() {
        return Math.floor(Math.random() * this.cakesImg.length)
    }
  
    drawGame() {
      clear();
      this.background.drawBackground();
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
        this.cakes.push(new Cake(this.cakesImg[this.getRandomCake()].src));
      }

      this.cakes.forEach((cake) => {
        cake.drawCake(this.score);
      });
  
      this.cakes = this.cakes.filter((cake) => {
        if (cake.collision(this.player)) {
            return false;
          } else {
            return true;
          }
      });
    
      if (frameCount % 300 === 0) {
        this.obstacles.push(new Obstacle(this.obstacleImg));
      }
  
      this.obstacles.forEach((obstacle) => {
        obstacle.drawObstacle();
      });
    }
  }
