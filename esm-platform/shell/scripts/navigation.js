import { cardPage, renderDashboard } from "./shell.js"
import { newCard } from "http://localhost:4531/scripts/new-card.js";
import Navigo from "https://esm.sh/v86/navigo@8.11.1/es2022/navigo.js";

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

export async function initRouter2(root, user) {
    const router = new Navigo("/");

    router.on({
        "": async function () {
            const page = await renderDashboard();
            root && root.replaceChildren(page);
        },
        "/cards": async function () {
            const page = await cardPage(user);
            root && root.replaceChildren(page);
        },
        "/cards/new-card": async function () {
            const page = await newCard();
            root && root.replaceChildren(page);
        }
    });



}

export async function initRouter3(root, user) {
    if (navigation) {
        navigation.addEventListener('navigate', event => {
            const url = new URL(event.destination.url);
            switch (url.pathname) {
                case "/":
                    event.transitionWhile((async () => {
                        const page = await renderDashboard();
                        root && root.replaceChildren(page);
                    })());
                    break;
                case "/cards":
                    event.transitionWhile((async () => {
                        const page = await cardPage(user);
                        root && root.replaceChildren(page);
                    })());
                    break;
                case '/cards/new-card':
                    event.transitionWhile((async () => {
                        const page = await newCard();
                        root && root.replaceChildren(page);
                    })());
                    break;
            }
        });
    } else {
        await initRouter(root, user);
    }


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