(() => {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
        .row { display: flex; align-items: center; justify-content: space-between; margin-bottom:var(--size-lg); }
        .subrow{ display:flex; align-items:center; }
        .btn-link { color: var(--color-accent2); border: none; background-color: transparent; text-align:end;}
        </style>

        <div class="row">
            <div class="subrow">
                <input id="txt-phone" type="tel" />
                <slot name="icon"></slot>
            </div>
            <button id="btn-send-code" type="button" class="btn-link" disabled>send verification code</button>
        </div>
        <div id="phone-verification" class="row" data-hidden>
            <input id="txt-code" label="verification code" />
            <button id="btn-verify-code" type="button" class="btn-link">verify code</button>
        </div>
`;


    class PhoneNumber extends HTMLElement {

        constructor() {
            super();
            this.value = "000-0000000"
        }

        async connectedCallback() {
            
            this.attachShadow({ mode: 'open' });
            this.render();
            this.internals = this.attachInternals();
        }

        static get observedAttributes() {
            return ["value"];
        }
        
        static get formAssociated() {
            return true;
        }

        attributeChangedCallback(name, oldValue, newValue) {
            this.render(newValue);
        }

        render(value) {

            const phoneComponent = template.content.cloneNode(true);
            phoneComponent.querySelector("#txt-phone").value = value || this.value || "";

            phoneComponent.querySelector("#txt-phone").addEventListener("input", (event) => {
                const phoneWrapper = event.target.closest(".row").parentElement;
                if (event.target.value)
                    phoneWrapper.querySelector("#btn-send-code").removeAttribute("disabled");
                else {
                    phoneWrapper.querySelector("#btn-send-code").setAttribute("disabled", "true");
                    this.internals.setValidity({ valueMissing: true }, 'This field is required', event.target);
                }
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
                this.internals.setFormValue(phoneWrapper.querySelector("#txt-phone").value);
            });

            this.shadowRoot.replaceChildren(phoneComponent);
        }
    }

    customElements.define('phone-number', PhoneNumber);
})();

document.querySelector("#btn-change").addEventListener("click",()=>{
    document.querySelector("phone-number").setAttribute("value","05444549494")
})

const phoneNumber = document.createElement("phone-number");
document.appendChild(phoneNumber);

const host = `
<phone-number value="054-9910236">
    <img slot="icon" src="assets/success.svg">
</phone-number>
`;

