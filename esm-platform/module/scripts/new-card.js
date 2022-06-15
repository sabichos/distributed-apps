import { fetchTemplate,loadStyle } from "./actions.js";
//import newCardStyle from "../assets/new-card.css" assert { type: "css" };
//document.adoptedStyleSheets = [newCardStyle];


async function phoneNumber() {
    const phoneComponent = await fetchTemplate("phone");
    const phone = document.createElement("div");
    phoneComponent.querySelector("#txt-phone").addEventListener("input", (event) => {
        const phoneWrapper = event.target.closest(".row").parentElement;
        if (event.target.value)
            phoneWrapper.querySelector("#btn-send-code").removeAttribute("disabled");
        else
            phoneWrapper.querySelector("#btn-send-code").setAttribute("disabled", "true");
    });
    phoneComponent.querySelector("#btn-send-code").addEventListener("click", async (event) => {
        const phoneWrapper = event.target.closest(".row").parentElement;
        phoneWrapper.querySelector("#btn-send-code").setAttribute("disabled", "true");
        await fetch("/api/v1/phone/verify");
        phoneWrapper.querySelector("#phone-verification").removeAttribute("data-hidden");
    });
    phoneComponent.querySelector("#btn-verify-code").addEventListener("click", async (event) => {
        const phoneWrapper = event.target.closest(".row").parentElement;
        const code = phoneWrapper.querySelector("#txt-code").value;
        if (!code) return;

        phoneWrapper.querySelector("#phone-verification").setAttribute("disabled", "true");
        await fetch("/api/v1/phone/verify", { method: "post", headers: { "Content-Type": "application/json" }, body: { code } });
        phoneWrapper.querySelector("#icon-success").removeAttribute("data-hidden");
    });

    phone.replaceChildren(phoneComponent);
    return phone;
}

export async function newCard() {
    loadStyle("../assets/new-card.css");
    const [newCardComponent, phoneComponent] = await Promise.all([fetchTemplate("new-card"), phoneNumber()]);
    newCardComponent.querySelector("#phone-control").appendChild(phoneComponent);
    return newCardComponent;
}