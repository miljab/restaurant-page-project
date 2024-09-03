import pizzaImage1 from "./images/pizza1.jpg";
import pizzaImage2 from "./images/pizza2.jpg";
import pizzaImage3 from "./images/pizza3.jpg";
import pizzaImage4 from "./images/pizza4.jpg";

export function buildHomePage() {
    window.scrollTo(0, 0);
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const quote = document.createElement("div");
    quote.classList.add("quote");

    const quoteText = document.createElement("div");
    quoteText.classList.add("quote-text");

    const quoteParagraph = document.createElement("p");
    quoteParagraph.textContent = "Pizza! We love pizza! And we know that you love pizza too. Give us money and we will give you pizza. Pizza = happiness.";

    const quoteAuthor = document.createElement("span");
    quoteAuthor.classList.add("quote-author");
    quoteAuthor.textContent = "- GOATED Pizza CEO";

    quoteText.appendChild(quoteParagraph);
    quoteText.appendChild(quoteAuthor);
    quote.appendChild(quoteText);
    contentDiv.appendChild(quote);

    const imagesDiv = document.createElement("div");
    imagesDiv.classList.add("images-div");
    const imagesSrc = [pizzaImage1, pizzaImage2, pizzaImage3, pizzaImage4];
    
    for (let i = 0; i < 4; i++) {
        let pizzaImg = document.createElement("img");
        pizzaImg.classList.add('pizza-img');
        pizzaImg.id = "pizza" + i;
        pizzaImg.src = imagesSrc[i];
        imagesDiv.appendChild(pizzaImg);
    }

    contentDiv.appendChild(imagesDiv);

    const ecoDiv = document.createElement("div");
    ecoDiv.classList.add('eco-div');
    const ecoParagraph = document.createElement("p");
    ecoParagraph.classList.add('eco-paragraph');
    ecoParagraph.textContent = "Our food is 100% eco-friendly!";

    ecoDiv.appendChild(ecoParagraph);
    contentDiv.appendChild(ecoDiv);
    
}