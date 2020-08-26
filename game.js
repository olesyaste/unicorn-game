class Game {
    constructor() {
        this.clouds = [];
        this.cakes = [];
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.starting = 0;
        this.sound;
    }

    preloadGame() {
      this.startScreen = loadImage("../images/sky_1.png")
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
    soundFormats('mp3');
    this.sound = loadSound('./sound/bubble.mp3');
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
      this.clouds.forEach((cloud) => {
        cloud.drawCloud();
        if (this.player.collision(cloud)) {
          return false;
        } else {
          return true;
        }
      });

      
      this.cloud.drawCloud();
      this.cake.drawCake();
      this.obstacle.drawObstacle();
      this.player.drawPlayer();
    
      // if (gameStart === false) {
      //   push();
      //   image(this.startScreen, 0, 0);
      //   pop();
      // }

      if (this.lives === 0) {
        push();
        textSize(80);
        textAlign(CENTER);
        text(`GAME OVER`, 450, 350);
        textSize(40);
        text("Press ENTER to restart", 450, 450);
        gameOver = true;
        song.stop();
        noLoop();
        pop();
      }

      if (this.score === 20){
        push();
        textSize(80);
        textAlign(CENTER);
        text(`CONGRATS!`, 450, 250);
        text(`🎉🎉🎉`, 450, 330);
        text(`YOU WON!!`, 450, 410);
        textSize(40);
        text("Press ENTER to restart", 450, 500);
        gameOver = true;
        song.stop();
        noLoop();
        pop();
      }

      if (frameCount % 70 === 0) {
        this.clouds.push(new Cloud(this.cloudImg));
      }
  
      if (frameCount % 130 === 0) {
        this.cakes.push(new Cake(this.cakesImg[this.getRandomCake()].src));
      }

      this.cakes.forEach((cake) => {
        cake.drawCake(this.score);
      });
      
  
      this.cakes = this.cakes.filter((cake) => {
        if (cake.collision(this.player)) {
          this.sound.play();
          this.score ++;
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
     
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (this.player.collision(obstacle)) {
        this.lives --;
        return false;
      } else {
        return true;
      }

    })
    if (gameStart === false) {
      push();
      image(this.startScreen, 0, 0);
      pop();
    }
  }
}

