class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.yoda = null;
    this.BgObstacle = null;
    this.winObstacle1 = null;
    this.winObstacle2 = null;
    this.winObstacle3 = null;
    this.obstacles1 = [];
    this.obstacles2 = [];
    this.obstacles3 = [];
    this.obstacles4 = [];
    this.obstacles5 = [];
    this.allies1 = [];
    this.allies2 = [];
    this.allies3 = [];
    this.allies4 = [];
    this.allies5 = [];
    this.intervalId = null;
    this.frames = 0;
    this.frameScore = 0;
    this.score;
    this.currentScore = 0;
    this.width = 550;
    this.height = 550;
    this.background = new Image();
    this.backgroundLava = null;
    this.backgroundPlaceholder = null;
    this.controls = null;
    this.win = false;
  }

  drawBackground() {
    this.background.src = "docs/assets/img/background-canvas.png";
    this.background.style.borderRadius = "10px";
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
  }

  drawBackgroundPlaceholder() {
    this.ctx.fillStyle = `rgba(0, 0, 0, 0.7)`;
    this.ctx.fillRect(0, 500, this.width, 50);
  }

  start() {
    this.frameScore = 0;
    this.yoda = new Player(250, 455, 50, 35, this.ctx);
    this.backgroundLava = new Background(this.ctx);
    this.BgObstacle = new BgObject(0, 35, 550, 175, this.ctx);
    this.winObstacle1 = new WinObject(100, -12, 35, 47, this.ctx);
    this.winObstacle2 = new WinObject(250, -12, 35, 47, this.ctx);
    this.winObstacle3 = new WinObject(415, -12, 35, 47, this.ctx);
    this.controls = this.yoda.keyboardEvents();
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  update = () => {
    this.frames++;
    this.frameScore++;
    this.drawBackground();
    this.backgroundLava.drawLoopBackground();
    this.drawBackgroundPlaceholder();
    this.BgObstacle.draw();
    this.winObstacle1.draw();
    this.winObstacle2.draw();
    this.winObstacle3.draw();
    this.updateObstacles();
    this.updateAllies();
    this.yoda.draw();
    this.checkGameOver();
    this.checkCollision();
    this.checkWin();
    this.showScore();
  };

  updateObstacles() {
    for (let i = 0; i < this.obstacles1.length; i++) {
      this.obstacles1[i].x += 3;
      this.obstacles1[i].draw();
    }

    if (this.frames === 1 || this.frames % 150 === 0) {
      this.obstacles1.push(new EnemyFirstRow(this.ctx));
    }

    for (let i = 0; i < this.obstacles2.length; i++) {
      this.obstacles2[i].x -= 2;
      this.obstacles2[i].draw();
    }

    if (this.frames === 1 || this.frames % 120 === 0) {
      this.obstacles2.push(new EnemySecondRow(this.ctx));
    }

    for (let i = 0; i < this.obstacles3.length; i++) {
      this.obstacles3[i].x += 3;
      this.obstacles3[i].draw();
    }

    if (this.frames === 1 || this.frames % 120 === 0) {
      this.obstacles3.push(new EnemyThirdRow(this.ctx));
    }

    for (let i = 0; i < this.obstacles4.length; i++) {
      this.obstacles4[i].x -= 4;
      this.obstacles4[i].draw();
    }

    if (this.frames === 1 || this.frames % 60 === 0) {
      this.obstacles4.push(new EnemyFourthRow(this.ctx));
    }

    for (let i = 0; i < this.obstacles5.length; i++) {
      this.obstacles5[i].x += 1;
      this.obstacles5[i].draw();
    }

    if (this.frames === 1 || this.frames % 240 === 0) {
      this.obstacles5.push(new EnemyFifthRow(this.ctx));
    }
  }

  checkGameOver() {
    const crashed =
      this.obstacles1.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.obstacles2.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.obstacles3.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.obstacles4.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.obstacles5.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      });

    if (crashed || this.frames === 1980) {
      setTimeout(function () {
        document.getElementById("game-lost").style.display = "flex";
        document.getElementById("game-board").style.display = "none";
      }, 100);
      this.win = false;
      this.stop();
    }

    const board =
      this.allies1.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.allies2.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.allies3.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.allies4.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      }) ||
      this.allies5.some((obstacle) => {
        return this.yoda.crashWith(obstacle);
      });

    if (this.yoda.x < 0) {
      setTimeout(function () {
        document.getElementById("game-lost").style.display = "flex";
        document.getElementById("game-board").style.display = "none";
      }, 100);
      this.win = false;
      this.stop();
    }

    if (this.yoda.crashWith(this.BgObstacle) && !board) {
      setTimeout(function () {
        document.getElementById("game-lost").style.display = "flex";
        document.getElementById("game-board").style.display = "none";
      }, 100);
      this.win = false;
      this.stop();
    }
    if (this.yoda.x + 50 < 0 || this.yoda.x > this.width) {
      document.getElementById("game-lost").style.display = "flex";
      document.getElementById("game-board").style.display = "none";
      this.win = false;
      this.stop();
    }
  }

  updateAllies() {
    for (let i = 0; i < this.allies1.length; i++) {
      this.allies1[i].x += 1;
      this.allies1[i].draw();
    }

    if (this.frames === 1 || this.frames % 240 === 0) {
      this.allies1.push(new AllyFirstRow(this.ctx));
    }

    for (let i = 0; i < this.allies2.length; i++) {
      this.allies2[i].x -= 3;
      this.allies2[i].draw();
    }

    if (this.frames === 1 || this.frames % 180 === 0) {
      this.allies2.push(new AllySecondRow(this.ctx));
    }

    for (let i = 0; i < this.allies3.length; i++) {
      this.allies3[i].x += 2;
      this.allies3[i].draw();
    }

    if (this.frames === 1 || this.frames % 180 === 0) {
      this.allies3.push(new AllyThirdRow(this.ctx));
    }

    for (let i = 0; i < this.allies4.length; i++) {
      this.allies4[i].x -= 2;
      this.allies4[i].draw();
    }

    if (this.frames === 1 || this.frames % 120 === 0) {
      this.allies4.push(new AllyFourthRow(this.ctx));
    }

    for (let i = 0; i < this.allies5.length; i++) {
      this.allies5[i].x += 3;
      this.allies5[i].draw();
    }

    if (this.frames === 1 || this.frames % 180 === 0) {
      this.allies5.push(new AllyFifthRow(this.ctx));
    }
  }

  checkCollision() {
    for (let i = 0; i < this.allies1.length; i++) {
      if (this.yoda.crashHalf(this.allies1[i])) {
        this.yoda.x += 1;
      }
    }
    for (let i = 0; i < this.allies2.length; i++) {
      if (this.yoda.crashHalf(this.allies2[i])) {
        this.yoda.x -= 3;
      }
    }
    for (let i = 0; i < this.allies3.length; i++) {
      if (this.yoda.crashHalf(this.allies3[i])) {
        this.yoda.x += 2;
      }
    }
    for (let i = 0; i < this.allies4.length; i++) {
      if (this.yoda.crashHalf(this.allies4[i])) {
        this.yoda.x -= 4;
      }
    }
    for (let i = 0; i < this.allies5.length; i++) {
      if (this.yoda.crashHalf(this.allies5[i])) {
        this.yoda.x += 3;
      }
    }
  }

  checkWin() {
    if (
      this.yoda.crashWith(this.winObstacle1) ||
      this.yoda.crashWith(this.winObstacle2) ||
      this.yoda.crashWith(this.winObstacle3)
    ) {
      setTimeout(function () {
        document.getElementById("game-won").style.display = "flex";
        document.getElementById("game-board").style.display = "none";
      }, 100);
      this.win = true;
      this.stop();
    }
    this.score = 1000 - Math.floor(this.frameScore / 10);
    let scoredisplay = document.getElementById("score-display");
    scoredisplay.innerHTML = `Score: ${this.score}`;
  }

  stop() {
    clearInterval(this.intervalId);
    this.frames = 0;
    this.obstacles1 = [];
    this.obstacles2 = [];
    this.obstacles3 = [];
    this.obstacles4 = [];
    this.obstacles5 = [];
    this.allies1 = [];
    this.allies2 = [];
    this.allies3 = [];
    this.allies4 = [];
    this.allies5 = [];
    if (this.score > this.currentScore && this.win) {
      this.currentScore = this.score;
      window.localStorage.setItem("highscore", this.currentScore);
    }
  }

  showScore() {
    this.ctx.font = "16px cursive";
    this.ctx.fillStyle = "#35d32f";
    this.ctx.fillText(
      `${
        window.localStorage.getItem("highscore")
          ? window.localStorage.getItem("highscore")
          : 0
      }`,
      125,
      530
    );
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(`Highscore: `, 25, 530);

    if (this.frames < 180) {
      const timer = 30;
      this.ctx.fillText(`Time: `, 450, 530);
      this.ctx.fillStyle = "#35d32f";
      this.ctx.fillText(`${timer}`, 500, 530);
    } else {
      const timer = 33 - Math.floor(this.frames / 60);
      this.ctx.fillText(`Time: `, 450, 530);
      this.ctx.fillStyle = "#35d32f";
      this.ctx.fillText(`${timer}`, 500, 530);
    }

    if (this.frames < 180) {
      const timer2 = 3 - Math.floor(this.frames / 60);
      this.ctx.fillStyle = `rgba(0, 0, 0, 0.25)`;
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "#35d32f";
      this.ctx.font = "100px Star Jedi";
      this.ctx.backgroundColor = "#000000";
      this.ctx.fillText(`${timer2}`, 250, 275);
    }
  }
}
