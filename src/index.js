import { homeLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { aboutLoad } from "./about.js";

console.log("Everything works as expected");

homeLoad();

const buttons = document.querySelectorAll(".button");

const button1 = buttons[0];
const button2 = buttons[1];
const button3 = buttons[2];

console.log(buttons);

function clearWindow () {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

button1.addEventListener('click', ()=> {
    clearWindow();
    homeLoad();
});

button2.addEventListener('click', ()=> {
    clearWindow();
    menuLoad();
});

button3.addEventListener('click', ()=> {
    clearWindow();
    aboutLoad();
});