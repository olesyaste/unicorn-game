class Obstacle {
    constructor(img) {
      this.height = 100;
      this.width = 150;
      this.x = Math.floor(Math.random() * 700);
      this.y = 0;
      this.image = img;
    }

    
    drawObstacle() {
        this.y += 2;
        image(this.image, this.x, this.y, this.width, this.height);
      }
   
}