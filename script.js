const popupBtn = document.querySelector(".popup-btn");
const clearBtn = document.querySelector(".clear-btn");
const container = document.querySelector(".container");
const errorParagraph = document.querySelector(".error-msg");
const defaultBoardSize = 16;

const createBoard = (numberOfSquares) => {
  for (let i = 0; i < numberOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < numberOfSquares; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);

      column.addEventListener(
        "mouseover",
        () => (column.style.backgroundColor = "#000")
      );
      clearBtn.addEventListener("click", () => {
        column.style.backgroundColor = "#fff";
      });
    }

    container.appendChild(row);
  }
};

const displayParagraph = () => (errorParagraph.style.display = "block");

const changeBoardSize = () => {
  const userInput = parseInt(prompt("Enter desired size for the board"));
  if (userInput > 100 || userInput < 1 || userInput === 0) {
    errorParagraph.textContent =
      "Your input cannot be bigger than 100, nor less than 0";
    displayParagraph();
  } else if (!userInput) {
    errorParagraph.textContent = "Input a number";
    displayParagraph();
  } else {
    container.innerHTML = "";
    errorParagraph.textContent = "";
    createBoard(userInput);
  }
};

window.addEventListener("load", () => createBoard(defaultBoardSize));
popupBtn.addEventListener("click", changeBoardSize);
