let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector(".res-btn");
let pl1 = document.querySelector("#pl1");
let pl2 = document.querySelector("#pl2");
let pl1para = document.querySelector("#pl1");
let pl2para = document.querySelector("#pl2");

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [2, 4, 6],
  [6, 7, 8],
];

let player1 = true;
pl1 = 0;
pl2 = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Clicked!");
    if (player1) {
      box.innerText = "X";
      player1 = false;
    } else {
      box.innerText = "O";
      player1 = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const resetGame = () => {
  player1 = true;
  pl1 = 0;
  pl1para.innerText = pl1;
  pl2 = 0;
  pl2para.innerText = pl2;
  pl1para.classList.add("flipInX");
  pl2para.classList.add("flipInX");
  boxes.forEach((box) => box.classList.add("flipInX"));

  setTimeout(() => {
    pl1para.classList.remove("flipInX");
    pl2para.classList.remove("flipInX");
    boxes.forEach((box) => box.classList.remove("flipInX"));
  }, 1000);
  enableBtns();
};

const enableBtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    player1 = true;
  }
};

const showWinner = (winner, winningPattern) => {
  if (winner == "X") {
    pl1++;
    pl1para.innerText = pl1;
    animateScore(pl1para);
  } else {
    pl2++;
    pl2para.innerText = pl2;
    animateScore(pl2para);
  }
  enableBtns();
  flashWinningBoxes(winningPattern);
};

const animateScore = (scoreElement) => {
  scoreElement.classList.add("wobble");
  setTimeout(() => {
    scoreElement.classList.remove("wobble");
  }, 1000);
};

const flashWinningBoxes = (winningPattern) => {
  winningPattern.forEach((index) => {
    boxes[index].classList.add("flash");
  });
  setTimeout(() => {
    winningPattern.forEach((index) => {
      boxes[index].classList.remove("flash");
    });
  }, 1000);
};

const checkWin = () => {
  let isDraw = true;
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        showWinner(pos1val, pattern);
        isDraw = false;
        break;
      }
    }
  }
  if (isDraw && Array.from(boxes).every((box) => box.innerText !== "")) {
    handleDraw();
  }
};

resBtn.addEventListener("click", resetGame);

const handleDraw = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    enableBtns();
  });
};
