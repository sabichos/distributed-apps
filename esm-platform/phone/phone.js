import { fetchTemplate, loadStyle } from "./actions.js";

export async function phoneNumber() {
    await loadStyle("./assets/phone.css");
    const phoneComponent = await fetchTemplate("phone");
    const phone = document.createElement("div");
    phone.id = "secure-phone";
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