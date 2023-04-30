// Create and add buttons on the keyboard
let keyNames = new Map(Object.entries({"[": "BracketLeft", "]": "BracketRight", 
    "\\": "Backslash", "`": "Backquote", '/': "Slash", "'": "Quote", ";": "Semicolon", 
    ",": "Comma", ".": "Period", "-": "Minus", "=": "Equal", "Del": "Delete", " ": "Space", 
    "◄": "ArrowLeft", "▼": "ArrowDown", "►": "ArrowRight", "▲": "ArrowUp", "Win": "MetaLeft"}));  

export function createButton(text) {
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
}
