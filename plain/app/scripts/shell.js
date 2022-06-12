import { fetchTemplate, createIcon, getStyleUrl } from "./actions.js";
import { getRouteComponent, getRoute } from "./navigation.js";

async function renderNavbar(user) {
    const navbarComponent = await fetchTemplate("navbar");
    navbarComponent.querySelector("#links").replaceChildren();

    function setNodes(links, level) {

        for (const link of links) {
            const currentNode = document.createElement("div");
            currentNode.classList.add("node");
            currentNode.style.paddingInlineStart = `${16 + level * 16}px`;
            const child = document.createElement((link.url ? "a" : "span"));
            child.innerText = link.title;
            child.href = link.pathname || "";
            currentNode.replaceChildren(child);
            navbarComponent.querySelector("#links").appendChild(currentNode);

            if (link.children && link.children.length !== 0)
                setNodes(link.children, level + 1);
        }
    }

    setNodes(user.sitemap, 0);
    document.getElementById("navbar").replaceChildren(navbarComponent);
}

async function renderUserDetails(user) {
    const userDetailsComponent = await fetchTemplate("user-details");
    userDetailsComponent.querySelector("#customer-name").innerText = `${user.firstName} ${user.lastName}`;
    userDetailsComponent.querySelector("#customer-company").innerText = user.companyName;
    userDetailsComponent.querySelector("#customer-id").innerText = `Customer ID: ${user.customerId}`;
    userDetailsComponent.querySelector("#customer-last-sign").innerText = `Last Sign In: ${user.lastLogin}`;
    document.getElementById("user-details").replaceChildren(userDetailsComponent);
}

async function renderPage(user) {
    const mainComponent = await fetchTemplate("main");
    if (user.selectedRoute?.url) {
        mainComponent.querySelector("#page-header").removeAttribute("data-hidden");
        mainComponent.querySelector("#page-title").innerText = "dashboard";
        mainComponent.querySelector("#page-breadcrumb").innerText = user.selectedRoute?.pathname.replace(/\//g, " > ");    
    }


    const [name, page] = await getRouteComponent(user);
    mainComponent.querySelector("#page-body").replaceChildren(page);
    document.getElementById("main").replaceChildren(mainComponent);
    document.getElementById("page-style").href = getStyleUrl(name);
}


export async function cardPage(user) {
    const cardComponent = await fetchTemplate("card");
    const page = document.createElement("section");
    page.id = "card-page";
    for (const link of user.sitemap[0].children) {
        const ct = cardComponent.cloneNode(true);
        ct.querySelector(".title").innerText = link.title;
        if (link.icon)
            ct.querySelector(".icon").replaceChildren(createIcon(link.icon[0], link.icon[1]));
        page.appendChild(ct);
    }
    return page;
}

export async function shell(userDetails) {
    userDetails["selectedRoute"] = getRoute(userDetails.sitemap);
    Promise.all([renderNavbar(userDetails), renderPage(userDetails), renderUserDetails(userDetails)]);
}