class Cake {
    constructor(img) {
      this.height = 50;
      this.width = 50;
      this.x = Math.floor(Math.random() * 300) + 200;
      this.y = 0;
      this.image = img;
    }

    
    drawCake() {
        this.y += 2;
        image(this.image, this.x, this.y, this.width, this.height);
      }
}