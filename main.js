let header = document.createElement("h1");
header.classList.add("header");  
header.innerText = "Virtual Keyboard";
header.setAttribute("align", "center");
document.body.appendChild(header);

let textarea = document.createElement("textarea");
textarea.classList.add("textarea"); 
textarea.setAttribute("rows", "5");
textarea.setAttribute("cols", "50");
textarea.style.display = "block";
textarea.style.width = "700px";
textarea.style.height = "200px";
textarea.style.margin = "10px auto 10px";
textarea.style.padding = "10px";
textarea.style.fontSize = "18px";
textarea.style.color = "#444444";
textarea.style.overflow = "auto";
document.body.appendChild(textarea);

let board = document.createElement("div");
board.classList.add("board"); 
board.style.display = "block";
board.style.width = "700px";
board.style.margin = "0 auto";
board.style.padding = "5px";
board.style.border = "#222222 solid 3px";
board.style.borderRadius = "5px";
board.style.background = "#888888";
document.body.appendChild(board);

function createRow() {
  let row = document.createElement("div");
  row.classList.add("row");  
  return row;
};

function createButton(text) {
  let button = document.createElement("div");
  button.classList.add("button");  
  if (text.length > 4) {
    button.style.width = "86px";
  } else if (text === " ") {
    button.style.width = "316px";
  }
  // if (text.length > 1 || text === "◄" || text === "▼" || text === "►" || text === "▲") {
  //   button.style.backgroundColor = "#222222";    
  // } 
  button.innerText = text;
  return button;
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
/*
function inputText(target) {
  text = target.innerText;
  if (text.length === 1) {
    textarea.textContent += text;
  } else if (text === "Backspace") {
    textarea.textContent = textarea.textContent.slice(0, -1);
  }
}
*/
board.onclick = function(event) {
  let target = event.target;
  if (target.classList.contains('button')) {
    target.style.backgroundColor = "#2cfd72";
    target.style.borderRadius = "50px";
    if (target.innerText.length < 2) {
      textarea.textContent += target.innerText;
    }    
  }
}
/*
let big_buttons = Array.from(document.querySelectorAll(".button"))
big_buttons.addEventListener("click", {
  let button = event.target;
  
})
*/

