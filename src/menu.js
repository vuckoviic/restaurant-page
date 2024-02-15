import pizza from "./pizza.jpg";
import spagetti from "./spagetti.jpg";

export function menuLoad() {
    const h1 = document.createElement("h1");

    const imgPizza = document.createElement("img");
    const pPizza = document.createElement("p");
    const imgSpagetti = document.createElement("img");
    const pSpagetti = document.createElement("p");
    
    imgPizza.src = pizza;
    imgSpagetti.src = spagetti;
    pPizza.innerText = "Best Pizza In USA (because it is from Italy)";
    pSpagetti.innerText = "Generations were brought up on these";

    h1.innerText = "Explore Italian National Cuisine";

    const content = document.getElementById("content");

    content.appendChild(h1);
    content.appendChild(imgPizza);
    content.appendChild(pPizza);
    content.appendChild(imgSpagetti);
    content.appendChild(pSpagetti);
}