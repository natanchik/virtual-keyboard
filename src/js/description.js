// Description in the end of document

let description = document.createElement("div");
description.classList.add("decription");

let paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.innerText = `Клавиатура создана в операционной системе Windows\n
Для переключения языка комбинация: левыe shift + alt`;

description.appendChild(paragraph);

export { description }