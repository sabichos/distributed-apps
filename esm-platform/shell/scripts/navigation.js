import { cardPage } from "./shell.js"
import { newCard } from "http://localhost:4531/scripts/new-card.js";


export function initRouter(root, user) {

    async function setComponent() {
        const [name, page] = await getRouteComponent(user);
        root && root.replaceChildren(page);
    }

    //document.removeEventListener("hashchange", setComponent);
    window.addEventListener("hashchange", async () => {
        await setComponent();
    });

    setComponent();
}

export async function getRouteComponent(...args) {

    switch (location.hash) {
        case "#cards/new-card":
            return ["new-card", await newCard(...args)];
        default:
            return ["card-page", await cardPage(...args)];
    }

}

export function getRoute(sitemap) {

    for (const link of sitemap) {
        if (link.pathname === location.pathname.replace(/^\/+/g, '')) {
            return link;
        }
        if (link.children) {
            const childLink = getRoute(link.children);
            return childLink
        }
    }

}