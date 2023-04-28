// Add elements on the page

let header = document.createElement("h1");
header.classList.add("header");  
header.innerText = "Virtual Keyboard";
document.body.appendChild(header);

let textarea = document.createElement("textarea");
textarea.classList.add("textarea"); 
textarea.setAttribute("rows", "5");
textarea.setAttribute("cols", "50");
document.body.appendChild(textarea);

let board = document.createElement("div");
board.classList.add("board"); 
document.body.appendChild(board);

// Create and add buttons on the keyboard

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

let keyNames = new Map(Object.entries({"[": "BracketLeft", "]": "BracketRight", 
    "\\": "Backslash", "`": "Backquote", '/': "Slash", "'": "Quote", ";": "Semicolon", 
    ",": "Comma", ".": "Period", "-": "Minus", "=": "Equal", "Del": "Delete", " ": "Space", 
    "◄": "ArrowLeft", "▼": "ArrowDown", "►": "ArrowRight", "▲": "ArrowUp", "Win": "MetaLeft"}));    

let isCapsLock = false;
let isEng = true;
    
function createButton(text) {
  let button = document.createElement("div");
  button.classList.add("button");  
  if (text.length > 4) {
    button.style.width = "86px";
  } else if (text === " ") {
    button.style.width = "316px";
  }  
  if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text)) {
    button.setAttribute("id", `Key${text}`); 
    button.classList.add("letters"); 
  } else if ("0123456789".includes(text)) {
    button.setAttribute("id", `Digit${text}`); 
    button.classList.add("digits");  
  } else if (keyNames.has(text)) {
    button.setAttribute("id", keyNames.get(text));
    if (text.length === 1 && text !== "◄" && text !== "▼" && text !==  "►" && text !== "▲") {
      button.classList.add("symbols");  
    } else {
      button.classList.add("funcButtons");  
    }
  } else {
    button.setAttribute("id", text);
    button.classList.add("funcButtons");  
  }  
  button.innerText = text;
  return button;
};

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

let buttonCaps = document.getElementById("CapsLock");

// Add interactive

board.onmousedown = function(event) {
  let target = event.target;
  if (target.classList.contains('button')) {
    target.classList.add("active");        
    if (event.code === "CapsLock") {
      isCapsLock = !isCapsLock;  
    } else {
      let text = "";  
      if (target.innerText.length === 1) {
        text = target.innerText;
      } else if (target.innerText == "Enter") {
        text = "\n"
      } else if (target.innerText == "Tab") {
        text = "\t"
      } else if (target.innerText == "Space") {
        text = " "
      } 
      textarea.textContent += text; 
    }    
  }
}

board.onmouseup = function(event) {
  let target = event.target;
  if (target.classList.contains('button')) {
    if (target.innerText === "CapsLock") {
      isCapsLock = !isCapsLock; 
    } else {
      target.classList.remove("active");                
    }    
  }  
}  

document.addEventListener('keydown', function(event) {   
  let button = document.getElementById(event.code);  
  button.classList.add("active"); 
  if (event.code === "CapsLock") {
    isCapsLock = !isCapsLock;  
  }     
});

document.addEventListener('keyup', function(event) {  
  let button = document.getElementById(event.code);  
  button.classList.remove("active");   
});

// Description in the end of document

let description = document.createElement("div");
description.classList.add("decription");

let paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.innerText = `Клавиатура создана в операционной системе Windows\n
Для переключения языка комбинация: левыe shift + alt`;

document.body.appendChild(description);
description.appendChild(paragraph);
