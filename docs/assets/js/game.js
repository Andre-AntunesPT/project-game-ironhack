class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.yoda = null;
    this.winObstacle1 = null;
    this.winObstacle2 = null;
    this.winObstacle3 = null;
    this.winObstacle4 = null;
    this.winObstacle5 = null;
    this.obstacles = [];
    this.intervalId = null;
    this.frames = 0;
    this.width = 550;
    this.height = 550;
    //this.background = new Image();
    this.backgroundRoad = new Image();
    this.controls = null;
  }

  /*drawBackgroundLava() {
    this.background.src = "/docs/assets/img/lava-bg.gif";
    let tilePattern = this.ctx.createPattern(this.background, "repeat");
    this.ctx.fillStyle = tilePattern;
    this.ctx.fillRect(0, 35, 550, 210);
  }*/

  drawBackgroundRoad() {
    this.backgroundRoad.src = "/docs/assets/img/bg-placeholder.png";
    this.backgroundRoad.style.borderRadius = "10px";
    this.ctx.drawImage(this.backgroundRoad, 0, 0, this.width, this.height);
    //this.ctx.drawImage(this.backgroundRoad, 0, 0, this.width, 280);
  }

  start() {
    this.yoda = new Player(250, 455, 50, 35, this.ctx);
    this.winObstacle1 = new WinObject(50, 0, 50, 35, this.ctx);
    this.winObstacle2 = new WinObject(150, 0, 50, 35, this.ctx);
    this.winObstacle3 = new WinObject(250, 0, 50, 35, this.ctx);
    this.winObstacle4 = new WinObject(350, 0, 50, 35, this.ctx);
    this.winObstacle5 = new WinObject(450, 0, 50, 35, this.ctx);
    this.controls = this.yoda.keyboardEvents();
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  update = () => {
    this.frames++;
    //this.drawBackgroundLava();
    this.drawBackgroundRoad();
    this.winObstacle1.draw();
    this.winObstacle2.draw();
    this.winObstacle3.draw();
    this.winObstacle4.draw();
    this.winObstacle5.draw();
    this.yoda.draw();
    this.updateObstacles();
    this.checkGameOver();
    //this.checkCollision();
    this.checkWin();
    this.score();
  };

  updateObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      if (i % 2 === 0) {
        this.obstacles[i].x += 1;
        this.obstacles[i].draw();
      } else {
        this.obstacles[i].x -= 3;
        this.obstacles[i].draw();
      }
    }

    if (this.frames % 240 === 0) {
      this.obstacles.push(new ObsFirstRow(this.ctx));
      this.obstacles.push(new ObsThirdRow(this.ctx));
      this.obstacles.push(new ObsFifthRow(this.ctx));
    }

    if (this.frames % 180 === 0) {
      this.obstacles.push(new ObsSecondRow(this.ctx));
      this.obstacles.push(new ObsFourthRow(this.ctx));
    }
  }

  checkGameOver() {
    const crashed = this.obstacles.some((obstacle) => {
      return this.yoda.crashWith(obstacle);
    });

    if (crashed || this.frames === 600) {
      document.getElementById("game-lost").style.display = "flex";
      document.getElementById("game-board").style.display = "none";
      this.stop();
    }
  }

  /*checkCollision() {
    const crashed = this.obstacles.some((obstacle) => {
      return this.yoda.crashWith(obstacle);
    });

    if (crashed) {
      this.yoda.x += 1;
    }
  }*/

  checkWin() {
    if (
      this.yoda.crashWith(this.winObstacle1) ||
      this.yoda.crashWith(this.winObstacle2) ||
      this.yoda.crashWith(this.winObstacle3) ||
      this.yoda.crashWith(this.winObstacle4) ||
      this.yoda.crashWith(this.winObstacle5)
    ) {
      document.getElementById("game-won").style.display = "block";
      document.getElementById("game-board").style.display = "none";
      this.stop();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  score() {
    this.ctx.font = "18px monospace";
    this.ctx.fillStyle = "white";
    const timer = 10 - Math.floor(this.frames / 60);
    this.ctx.fillText(`Timer: ${timer}`, 50, 525);
    const score = 1000 - Math.floor(this.frames / 5);
    let scoredisplay = document.getElementById("score-display");
    scoredisplay.innerHTML = `Score: ${score}`;
  }
}
