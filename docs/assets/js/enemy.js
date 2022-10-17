/*class Enemy {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * 300) - 100;
    this.y = 0;
    this.w = Math.floor(Math.random() * (350 - 50 + 1) + 50);
    this.h = 50;
    this.color = `rgb(${this.y % 255}, 0, 0)`;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
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
}
*/

class WinObject {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.color = `rgba(255, 0, 0, 0.1)`;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
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
}

class Enemy {
  constructor(ctx, x, y, w, h, img) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
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
}

class ObsFirstRow extends Enemy {
  constructor(ctx) {
    super(ctx, -100, 385, 100, 35, new Image());
  }

  draw() {
    this.img.src = "/docs/assets/img/ship-test.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class ObsSecondRow extends Enemy {
  constructor(ctx) {
    super(ctx, 650, 350, 50, 35, new Image());
  }

  draw() {
    this.img.src = "/docs/assets/img/ship-test.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class ObsThirdRow extends Enemy {
  constructor(ctx) {
    super(ctx, -100, 315, 75, 35, new Image());
  }

  draw() {
    this.img.src = "/docs/assets/img/ship-test.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class ObsFourthRow extends Enemy {
  constructor(ctx) {
    super(ctx, 650, 280, 50, 35, new Image());
  }

  draw() {
    this.img.src = "/docs/assets/img/ship-test.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class ObsFifthRow extends Enemy {
  constructor(ctx) {
    super(ctx, -100, 245, 100, 35, new Image());
  }

  draw() {
    this.img.src = "/docs/assets/img/ship-test.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
