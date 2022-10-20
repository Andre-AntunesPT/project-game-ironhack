window.onload = () => {
  document.getElementById("instructions-button").onclick = () => {
    document.getElementById("game-instructions").style.display = "block";
  };
  document.getElementById("back-button").onclick = () => {
    document.getElementById("game-instructions").style.display = "none";
  };
  document.getElementById("start-button").onclick = () => {
    startGame();
    document.getElementById("game-intro").style.display = "none";
    document.getElementById("game-board").style.display = "block";
  };
  document.getElementById("restart-button-lost").onclick = () => {
    startGame();
    document.getElementById("game-lost").style.display = "none";
    document.getElementById("game-board").style.display = "block";
  };
  document.getElementById("restart-button-won").onclick = () => {
    startGame();
    document.getElementById("game-won").style.display = "none";
    document.getElementById("game-board").style.display = "block";
  };

  function startGame() {
    game.start();
  }
};

let game = new Game();
