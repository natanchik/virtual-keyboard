import { inputText } from "./input_text"
import { changeCase } from "./change_case"
import { changeLang } from "./change_lang"

export function mouseDown(event) {
  let target = event.target;
  if (target.classList.contains('button')) {
    target.classList.add("active");        
    if (event.code === "CapsLock") {
      changeCase();      
    } else if (event.altKey && event.shiftKey) {
      changeLang();      
    } else {
      inputText(target);     
    }   
  }  
}

export function mouseUp(event) {
  let target = event.target;
  if (target.classList.contains('button')) {
    if (target.innerText === "CapsLock") {
      changeCase();
    } else {
      target.classList.remove("active");                
    }          
  }
}  