import { letters } from "./board"

export let isCapsLock = true;

export function changeCase() {
  isCapsLock = !isCapsLock;  
  isCapsLock ? document.getElementById("CapsLock").classList.add("active") : document.getElementById("CapsLock").classList.remove("active");
  for (let letter of letters) {
    letter.innerText = isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase(); 
  }
}