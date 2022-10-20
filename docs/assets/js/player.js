class Player {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.img = new Image();
    this.img1 = new Image();
    this.img1.src = "docs/assets/img/yoda-1.png";
    this.img2 = new Image();
    this.img2.src = "docs/assets/img/yoda-2.png";
    this.img3 = new Image();
    this.img3.src = "docs/assets/img/yoda-f-1.png";
    this.img4 = new Image();
    this.img4.src = "docs/assets/img/yoda-f-2.png";
    this.img.src = this.img1.src;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          if (game.frames > 180 && this.x > 0) {
            this.x -= 50;
            if (
              this.img.src === this.img1.src ||
              this.img.src === this.img3.src ||
              this.img.src === this.img4.src
            ) {
              return (this.img.src = this.img2.src);
            }
            if (
              this.img.src === this.img2.src ||
              this.img.src === this.img3.src ||
              this.img.src === this.img4.src
            ) {
              return (this.img.src = this.img1.src);
            }
          }
          break;
        case "ArrowRight":
          if (game.frames > 180 && this.x + this.w < 550) {
            this.x += 50;
            if (
              this.img.src === this.img1.src ||
              this.img.src === this.img3.src ||
              this.img.src === this.img4.src
            ) {
              return (this.img.src = this.img2.src);
            }
            if (
              this.img.src === this.img2.src ||
              this.img.src === this.img3.src ||
              this.img.src === this.img4.src
            ) {
              return (this.img.src = this.img1.src);
            }
          }
          break;
        case "ArrowUp":
          if (game.frames > 180 && this.y > 0) {
            this.y -= 35;
            if (
              this.img.src === this.img1.src ||
              this.img.src === this.img3.src ||
              this.img.src === this.img4.src
            ) {
              return (this.img.src = this.img2.src);
            }
            if (
              this.img.src === this.img2.src ||
              this.img.src === this.img3.src ||
              this.img.src === this.img4.src
            ) {
              return (this.img.src = this.img1.src);
            }
          }
          break;
        case "ArrowDown":
          if (game.frames > 180 && this.y + this.h < 490) {
            this.y += 35;
            if (
              this.img.src === this.img1.src ||
              this.img.src === this.img2.src ||
              this.img.src === this.img3.src
            ) {
              return (this.img.src = this.img4.src);
            }
            if (
              this.img.src === this.img1.src ||
              this.img.src === this.img2.src ||
              this.img.src === this.img4.src
            ) {
              return (this.img.src = this.img3.src);
            }
          }
          break;
      }
    });
  }
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
  centerX() {
    return this.x + this.w / 2;
  }
  centerY() {
    return this.y + this.h / 2;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() <= obstacle.top() ||
      this.top() >= obstacle.bottom() ||
      this.right() <= obstacle.left() ||
      this.left() >= obstacle.right()
    );
  }

  crashHalf(obstacle) {
    return !(
      this.centerY() <= obstacle.top() ||
      this.centerY() >= obstacle.bottom() ||
      this.centerX() <= obstacle.left() ||
      this.centerX() >= obstacle.right()
    );
  }
}
