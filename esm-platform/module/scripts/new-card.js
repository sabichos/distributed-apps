import { fetchTemplate,loadStyle } from "./actions.js";
//import newCardStyle from "../assets/new-card.css" assert { type: "css" };
//document.adoptedStyleSheets = [newCardStyle];


export async function newCard() {
    loadStyle("../assets/new-card.css");
    const module = await import ("http://localhost:4532/phone.js");
    const [newCardComponent, phoneComponent] = await Promise.all([fetchTemplate("new-card"), module.phoneNumber()]);
    newCardComponent.querySelector("#phone-control").appendChild(phoneComponent);
    return newCardComponent;
}