class Cloud {
    constructor(img) {
      this.height = 100;
      this.width = 100;
      this.x = Math.floor(Math.random() * 300) + 200;
      this.y = 0;
      this.image = img;
    }

    
    drawCloud() {
        this.y += 3;
        image(this.image, this.x, this.y, this.width, this.height);
      }
}