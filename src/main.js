import { header } from "./js/header"
import { textarea } from "./js/textarea"
import { board } from "./js/board"
import { description } from "./js/description"
import { changeCase } from "./js/change_case"
import { mouseDown, mouseUp } from "./js/mouse_events"
import { keyDown, keyUp } from "./js/keyboard_events"
import "./style.css"

// Add elements on the page

document.body.appendChild(header);

document.body.appendChild(textarea);

document.body.appendChild(board);

document.body.appendChild(description);

// Add interactive

changeCase()

board.onmousedown = function(event) { mouseDown(event)};

board.onmouseup = function(event) { mouseUp(event) };

document.addEventListener('keydown', function(event) { keyDown(event) });

document.addEventListener('keyup', function(event) { keyUp(event) });
