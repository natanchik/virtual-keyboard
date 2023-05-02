import { textarea } from "./textarea"

export function inputText(target) {
  let text = "";  
  if (target.innerText && target.innerText.length === 1) {
    text = target.innerText;
  } else if (target.innerText == "Enter") {
    text = "\n"
  } else if (target.innerText == "Tab") {
    text = "\t"
  } else if (target.innerText == "Space") {
    text = " "
  }
  textarea.textContent += text; 
  if (target.innerText == "Backspace") {
    // target.dispatchEvent(new KeyboardEvent("keydown", {code: "Backspace"}));
    textarea.textContent = textarea.textContent.slice(0, -1);
  }
}