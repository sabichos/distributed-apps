import { newCard } from "./new-card.js";
import { cardPage } from "./shell.js"

export async function getRouteComponent(...args) {

    switch (location.pathname) {
        case "/cards/new-card":
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