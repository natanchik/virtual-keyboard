import { createButton } from "./create_buttons"

let board = document.createElement("div");
board.classList.add("board"); 
document.body.appendChild(board);

function createRow() {
  let row = document.createElement("div");
  row.classList.add("row");  
  return row;
};

let symbol_rows = [
  ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"],
  ["Tab", ..."QWERTYUIOP[]", "\\", "Del"],
  ["CapsLock", ..."ASDFGHJKL;'", "Enter"],
  ["Shift", ..."ZXCVBNM,./", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];

for (let symbol_row of symbol_rows) {
  let row = createRow();
  board.appendChild(row);
  for (let symbol of symbol_row) {
    row.appendChild(createButton(symbol));    
  }
}

let shiftButtons = Array.from(document.querySelectorAll("#Shift"));
shiftButtons[0].setAttribute("id", "ShiftLeft");
shiftButtons[1].setAttribute("id", "ShiftRight");

let ctrlButtons = Array.from(document.querySelectorAll("#Ctrl"));
ctrlButtons[0].setAttribute("id", "ControlLeft");
ctrlButtons[1].setAttribute("id", "ControlRight");

let altButtons = Array.from(document.querySelectorAll("#Alt"));
altButtons[0].setAttribute("id", "AltLeft");
altButtons[1].setAttribute("id", "AltRight");

let letters = Array.from(document.querySelectorAll(".letters"));
let digits = Array.from(document.querySelectorAll(".digits"));

export { board, letters, digits }
