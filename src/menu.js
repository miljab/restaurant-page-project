import pizzaImage1 from "./images/pizza1.jpg";
import pizzaImage2 from "./images/pizza2.jpg";
import pizzaImage3 from "./images/pizza3.jpg";
import pizzaImage4 from "./images/pizza4.jpg";

class menuPosition {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

export function buildMenuPage() {
    window.scrollTo(0, 0);
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";

    const pos1 = new menuPosition("Tasty Pizza", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue nibh. Ut porttitor rutrum elit non ultrices. Suspendisse laoreet tristique velit eget ultrices.", pizzaImage1);
    const pos2 = new menuPosition("Delicious Pizza", "Suspendisse vel dolor nec augue commodo commodo non quis dui. Duis non facilisis metus, id pharetra massa. Donec dictum metus urna, a faucibus odio egestas elementum. Quisque vehicula diam et ex scelerisque, vel congue sem vehicula. Proin mattis elementum sodales.", pizzaImage2);
    const pos3 = new menuPosition("Super Pizza", "Praesent eget magna ac diam faucibus porttitor a eu tortor. Cras lacus lectus, ullamcorper vel nibh non, facilisis porttitor lacus. Nulla varius, lacus nec semper sollicitudin, eros massa tincidunt sapien, eu porttitor turpis ex et ipsum.", pizzaImage3);
    const pos4 = new menuPosition("GOATED Pizza", "Suspendisse a nisl tellus. Duis orci ligula, elementum id nisl at, maximus laoreet tortor. Praesent at risus sit amet tortor consequat maximus et viverra metus. Aliquam et sem aliquet, sagittis est eu, eleifend risus.", pizzaImage4);

    const positions = [pos1, pos2, pos3, pos4];

    for (let i = 0; i < positions.length; i++) {
        let posDiv = document.createElement("div");
        posDiv.classList.add("menu-position");
        if (i == positions.length - 1) posDiv.classList.add("menu-position-last");

        let posImage = document.createElement("img");
        posImage.classList.add("menu-pos-img");
        posImage.src = positions[i].image;

        let posName = document.createElement("h2");
        posName.classList.add("menu-pos-name");
        posName.textContent = positions[i].name;

        let posDesc = document.createElement("p");
        posDesc.classList.add("menu-pos-desc");
        posDesc.textContent = positions[i].description;

        posDiv.appendChild(posImage);
        posDiv.appendChild(posName);
        posDiv.appendChild(posDesc);

        menuDiv.appendChild(posDiv);
    }

    contentDiv.appendChild(menuDiv);
}