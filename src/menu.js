export function menuLoad() {
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");

    h1.innerText = "Explore Italian National Cuisine";
    img.src = cook;
    p.innerText = "This is the first ever oldfashioned, old school restaurant in the center of New York. It is honor be a chief at this beautiful place";

    const content = document.getElementById("content");

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);
}