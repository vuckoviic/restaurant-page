import restaurantImage from "./restaurant.jpg";

export function homeLoad() {
    
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");

    h1.innerText = "The Italian Restaturant";
    img.src = restaurantImage;
    p.innerText = "This is the first ever oldfashioned, old school restaurant in the center of New York.";

    const content = document.getElementById("content");

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);
}