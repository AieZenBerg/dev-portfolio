'use strict';
const button=document.querySelector('#theme');
button.addEventListener('click',()=>{const light=document.body.classList.toggle('light');button.setAttribute('aria-pressed',String(light));});
button.setAttribute('aria-pressed','false');
