import { lineTemplate } from "./templates.js";

window.addEventListener("load", () => {

    document.querySelector("#btn-add-line")
        .addEventListener("click", addLine);



});





function addLine() {
    var template = document.createElement('template');
    template.innerHTML = `${lineTemplate}`;
    template.content.querySelector(".btn-delete").addEventListener("click", deleteLine);
    template.content.querySelector(".lyrics").addEventListener("dblclick", editLine);
    document.querySelector("#lines").appendChild(template.content);
    toggleAddLineButton();
}

function editLine(event) {
    event.target.classList.add("hidden");
    event.target.parentNode.querySelector(".lyrics-input").classList.remove("hidden");


}

function deleteLine(event) {
    document.querySelector("#lines").removeChild(event.target.closest(".line"));
    toggleAddLineButton();


}

function toggleAddLineButton() {
    const btn = document.querySelector("#btn-add-line");
    const lines = document.querySelectorAll(".line");

    if (lines.length >= 6)
        btn.setAttribute("disabled", "disabled");
    else
        btn.removeAttribute("disabled");
}