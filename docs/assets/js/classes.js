/////////////////
// Win BG Lava //
/////////////////

class Background {
  constructor(ctx) {
    this.scrollVal = 0;
    this.canvasWidth = 550;
    this.imgBg = new Image();
    this.ctx = ctx;
  }
  drawLoopBackground() {
    this.imgBg.src = "docs/assets/img/bg-lava.png";
    this.scrollVal += 0.5;
    if (this.scrollVal >= this.canvasWidth) {
      this.scrollVal = 0;
    }
    this.ctx.drawImage(this.imgBg, -this.scrollVal, 0, 550, 210);
    this.ctx.drawImage(
      this.imgBg,
      this.canvasWidth - this.scrollVal,
      0,
      550,
      210
    );
  }
}

////////////////
// Win Object //
////////////////

class WinObject {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.img = new Image();
  }

  draw() {
    this.img.src = "docs/assets/img/iron-ally_final.png";
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
}

///////////////
// BG Object //
///////////////

class BgObject {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.color = `rgba(0, 0, 0, 0)`;
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

///////////////////
// Parent Object //
///////////////////

class CollisionObj {
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

//////////////////
// Enemy Object //
//////////////////

class EnemyFirstRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, -200, 385, 200, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/ship4.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class EnemySecondRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, 650, 350, 35, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/ship1.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class EnemyThirdRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, -72, 315, 72, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/ship2.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class EnemyFourthRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, 650, 280, 35, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/ship1.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class EnemyFifthRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, -89, 245, 89, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/ship3.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

/////////////////
// Ally Object //
/////////////////

class AllyFirstRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, -70, 175, 94, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/iron-ally.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class AllySecondRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, 650, 140, 164, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/rock-ally.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class AllyThirdRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, -35, 105, 47, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/iron-ally1.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class AllyFourthRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, 650, 70, 70, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/wood-ally2.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class AllyFifthRow extends CollisionObj {
  constructor(ctx) {
    super(ctx, -35, 35, 47, 35, new Image());
  }

  draw() {
    this.img.src = "docs/assets/img/iron-ally1.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
