import { newCard } from "./new-card.js";

init();



async function init() {
    const newCardComponent = await newCard();
    document.getElementById("root").replaceChildren(newCardComponent);
}



