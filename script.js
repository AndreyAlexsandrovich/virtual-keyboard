'use strict';
import shiftKey from "./modules/shiftAll.js";
import capslock from "./modules/Capslock.js"
import altElement from "./modules/alt.js";
import backspace from './modules/BackSpace.js'
import spaceElement from './modules/space.js'
const keyClick = document.querySelectorAll('.key');
const arrKey = Array.from(keyClick);



function clickKey(event) {
    for (let i = 0; i < arrKey.length; i++) {
        if (event.key === arrKey[i].getAttribute('data-key')) {
            arrKey[i].classList.add('key-bg');
        } else if (event.key.toUpperCase() === arrKey[i].getAttribute('data-upper')) {
            arrKey[i].classList.add('key-bg');
        } else if (event.code === arrKey[i].getAttribute('data-tab')) {
            arrKey[i].classList.add('key-bg');
        } 
    }
}


function removeKey(event) {
    for (let j = 0; j < arrKey.length; j++) {
        if (event.key === arrKey[j].getAttribute('data-key')) {
            arrKey[j].classList.remove('key-bg');
        } else if (event.code === arrKey[j].getAttribute('data-tab')) {
            arrKey[j].classList.remove('key-bg');
        } else if (event.key.toUpperCase() === arrKey[j].getAttribute('data-upper')) {
            arrKey[j].classList.remove('key-bg');
        } 
    }
}

document.addEventListener('keydown', clickKey);
document.addEventListener('keyup', removeKey);

shiftKey()
capslock()
altElement()
backspace()
spaceElement()