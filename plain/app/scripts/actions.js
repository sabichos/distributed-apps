export async function fetchUserDetails() {
    return await fetch("/api/v1/user").then(res => res.json());
}



export async function fetchTemplate(name) {
    const html = await fetch(`/templates/${name}.html`).then(res => res.text());
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;

}

export function createIcon(viewBox, d) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    svg.setAttribute('viewBox', viewBox);
    path.setAttribute('d', d);
    svg.appendChild(path);
    return svg;
}

export function getStyleUrl(name){
    return `/assets/${name}.css`;
}