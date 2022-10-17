class Player {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "/docs/assets/img/yoda-1.png";
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          if (this.x > 0) {
            this.x -= 50;
            this.img.src = "/docs/assets/img/yoda-1.png";
          }
          break;
        case "ArrowRight":
          if (this.x + this.w < 550) {
            this.x += 50;
            this.img.src = "/docs/assets/img/yoda-2.png";
          }
          break;
        case "ArrowUp":
          if (this.y > 0) {
            this.y -= 35;
          }
          break;
        case "ArrowDown":
          if (this.y + this.h < 490) {
            this.y += 35;
          }
          break;
      }
    });
  }
  /*draw() {
    this.img.src = "/docs/assets/img/yoda-1.png";
    
    if (this.img.src === "/docs/assets/img/baby-yoda-1.png") {
      return (this.img.src = "/docs/assets/img/baby-yoda-2.png");
    }
    if (this.img.src === "/docs/assets/img/baby-yoda-2.png") {
      return (this.img.src = "/docs/assets/img/baby-yoda-1.png");
    }
    
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }*/
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() <= obstacle.top() ||
      this.top() >= obstacle.bottom() ||
      this.right() <= obstacle.left() ||
      this.left() >= obstacle.right()
    );
  }
}
