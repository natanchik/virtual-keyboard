import { letters } from "./board"
import { isCapsLock } from "./change_case"

export let isEng = true;

export function changeLang() {
  isEng = !isEng;  
  let engLetters = [..."QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,.`/"];
  let rusLetters = [..."ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ."];   
  for (let letter of letters) {
    if (!isEng) {
      letter.innerText = rusLetters[engLetters.indexOf(letter.innerText.toUpperCase())];
    } else {
      letter.innerText = engLetters[rusLetters.indexOf(letter.innerText.toUpperCase())]; 
    }    
    letter.innerText = isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase();    
  }  
}