import { inputText } from "./input_text"
import { changeCase } from "./change_case"
import { changeLang } from "./change_lang"

export function keyDown(event) {
  let button = document.getElementById(event.code);  
  if (button) {    
    button.classList.add("active");  
    if (event.altKey && event.shiftKey) {
      changeLang();
    } else if (event.code === "CapsLock") {
      changeCase();   
    } else {  
      event.preventDefault();
      inputText(button); 
    }  
  } 
}   

export function keyUp(event) {  
  let button = document.getElementById(event.code);
  if (button) {    
    button.classList.remove("active"); 
  } 
}