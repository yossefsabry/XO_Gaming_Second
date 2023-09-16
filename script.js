let title = document.querySelector(".title");
let item = document.querySelectorAll(".item");
let Turn = "X";
let moves = 0;
let gameWork = true;

// click for items
item.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.innerHTML == "" && gameWork) {
      if (Turn == "X") {
        el.innerHTML = Turn;
        Turn = "O";
        title.innerHTML = `Turn => ${Turn}`;
        moves++;
      } else if (Turn == "O") {
        el.innerHTML = Turn;
        Turn = "X";
        title.innerHTML = `Turn => ${Turn}`;
        moves++;
      }
      checkWin();
      draw();
    }
  });
});

// draw function
function draw() {
  if (moves >= 9) {
    item.forEach((el) => {
      el.style.backgroundColor = "black";
    });
    title.innerHTML = "Draw";
    setTimeout(() => {
      title.innerHTML += " !";
    }, 1000);
    setInterval(() => {
      location.reload();
    }, 3000);
  }
}

// win
function win(num1, num2, num3) {
  if (
    item[num1].innerHTML === item[num2].innerHTML &&
    item[num2].innerHTML === item[num3].innerHTML &&
    item[num2].innerHTML !== ""
  ) {
    console.log("win");
    item[num1].style.backgroundColor = "black";
    item[num2].style.backgroundColor = "black";
    item[num3].style.backgroundColor = "black";
    if (Turn == "O") {
      title.innerHTML = ` player X  Win`;
    } else {
      title.innerHTML = ` player O  Win`;
    }
    setInterval(() => {
      location.reload();
    }, 3000);
    gameWork = false;
  }
}

function checkWin() {
  // row
  win(0, 1, 2);
  win(3, 4, 5);
  win(6, 7, 8);

  //column
  win(0, 3, 6);
  win(1, 4, 7);
  win(2, 5, 8);

  // diagnal
  win(0, 4, 8);
  win(2, 4, 6);
}
