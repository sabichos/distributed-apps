function getUrl(relativeUrl) {
    const curloc = new URL(relativeUrl, import.meta.url);
    return curloc.toString();
}

export async function fetchTemplate(name) {
    const html = await fetch(getUrl(`/templates/${name}.html`)).then(res => res.text());
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
}

export async function loadStyle(url) {
    const style = await fetch(getUrl(url)).then(res => res.text());
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(style);
    document.adoptedStyleSheets.push(sheet);
}