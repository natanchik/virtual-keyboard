// Add elements on the page

let header = document.createElement("h1");
header.classList.add("header");  
header.innerText = "Virtual Keyboard";
document.body.appendChild(header);

let textarea = document.createElement("textarea");
textarea.classList.add("textarea"); 
textarea.setAttribute("rows", "5");
textarea.setAttribute("cols", "50");
textarea.setAttribute("autofocus", "autofocus");
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

let isCapsLock = true;
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
      if (text === "-" || text === "=" || text === "\\") {
        button.classList.add("digits");  
      } else if (text === " ") {
        button.classList.add("funcButtons");
      }else {
        button.classList.add("letters");  
      }     
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

let capsButton = document.getElementById("CapsLock");

let allButtons = Array.from(document.querySelectorAll(".button"));
let letters = Array.from(document.querySelectorAll(".letters"));
let digits = Array.from(document.querySelectorAll(".digits"));

// Add interactive

function changeCase() {
  isCapsLock = !isCapsLock;  
  isCapsLock ? capsButton.classList.add("active") : capsButton.classList.remove("active");
  for (let letter of letters) {
    letter.innerText = isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase(); 
  }
}

changeCase()

function changeLang() {
  isEng = !isEng;  
  let engLetters = [..."QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,.`/"];
  let rusLetters = [..."ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ."]; 
  console.log(letters)
  for (let letter of letters) {
    if (!isEng) {
      letter.innerText = rusLetters[engLetters.indexOf(letter.innerText)];
    } else {
      letter.innerText = engLetters[rusLetters.indexOf(letter.innerText)]; 
    }    
    letter.innerText = isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase();    
  }  
}

function inputText(target) {
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

board.onmousedown = function(event) {
  let target = event.target;
  if (target.classList.contains('button')) {
    target.classList.add("active");        
    if (event.code === "CapsLock") {
      changeCase();      
    } else if (event.altKey && event.shiftKey) {
      changeLang();      
    } else if (event.shiftKey) {      
      allButtons.classList.add("shift");
    } else {
      inputText(target);     
    } 
    console.log(target.innerText);   
  }
  
}

board.onmouseup = function(event) {
  let target = event.target;
  if (target.classList.contains('button')) {
    if (target.innerText === "CapsLock") {
      changeCase();
    } else {
      target.classList.remove("active");                
    }  
    if (event.shiftKey) {      
      allButtons.classList.remove("shift");
    }    
  }  
}  

document.addEventListener('keydown', function(event) {   
  // event.preventDefault();
  if (event.altKey && event.shiftKey) {
    changeLang();
  } else if (event.code === "CapsLock") {
    changeCase(); 
  }
  let button = document.getElementById(event.code);  
  button.classList.add("active");
  console.log(button, button.innerText);
  inputText(button);  
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
