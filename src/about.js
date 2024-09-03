export function buildAboutPage() {
    window.scrollTo(0, 0);
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const infoDiv = document.createElement("div");
    infoDiv.id = "info-div";

    const contactList = document.createElement("ul");
    contactList.id = "contact-list";

    const phoneNumber = document.createElement("li");
    phoneNumber.textContent = "Call us: +48 123 312 490";

    const email = document.createElement("li");
    email.textContent = "Email: goated@pizza.com";

    contactList.appendChild(phoneNumber);
    contactList.appendChild(email);
    infoDiv.appendChild(contactList);

    const infoParagraph = document.createElement("p");
    infoParagraph.classList.add("info-p");
    infoParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue nibh. Ut porttitor rutrum elit non ultrices. Suspendisse laoreet tristique velit eget ultrices. Aliquam molestie, est non tristique elementum, lacus massa dictum libero, sit amet elementum urna velit tristique tortor. Phasellus mollis velit sem, ut hendrerit justo posuere ut. Mauris fringilla felis sed odio gravida auctor. Suspendisse non sapien in orci scelerisque ullamcorper sit amet sed libero. Duis et facilisis velit. Sed ut dolor elementum, ultricies magna sed, sagittis justo.";

    infoDiv.appendChild(infoParagraph);

    contentDiv.appendChild(infoDiv);
}