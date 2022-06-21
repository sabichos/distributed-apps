import { fetchTemplate, createIcon } from "./actions.js";
import { initRouter3, getRoute } from "./navigation.js";
import { Chart, PieController, ArcElement, BarController, BarElement, CategoryScale, Legend, Title, Tooltip,LinearScale } from "https://esm.sh/v85/chart.js@3.8.0/es2022/chart.js";

async function renderNavbar(user) {
    const navbarComponent = await fetchTemplate("navbar");
    navbarComponent.querySelector("#links").replaceChildren();

    function setNodes(links, level) {

        for (const link of links) {
            const currentNode = document.createElement("div");
            currentNode.classList.add("node");
            currentNode.style.paddingInlineStart = `${16 + level * 16}px`;
            const child = document.createElement("a");
            child.innerText = link.title;
            child.href = link.pathname || "";
            child.setAttribute("data-navigo", "true");
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
    document.getElementById("main").replaceChildren(mainComponent);
}

export async function renderDashboard() {
    const data = await fetch("../assets/data.json").then(res => res.json());
    const dashboard = await fetchTemplate("dashboard");
    Chart.register(PieController, ArcElement, BarController, BarElement, CategoryScale, Legend, Title, Tooltip,LinearScale);

    const pie = dashboard.querySelector("#dash-pie").getContext("2d");
    const pieChart = new Chart(pie, {
        type: 'pie', data: data.doughnut
    });

    const bar = dashboard.querySelector("#dash-bar").getContext("2d");
    const barChart = new Chart(bar, {
        type: 'bar', data: data.bar
    });

    return dashboard;
}



export async function cardPage(user) {
    const cardComponent = await fetchTemplate("card");
    const page = document.createElement("section");
    page.id = "card-page";
    for (const link of user.sitemap[0].children) {
        const ct = cardComponent.cloneNode(true);
        ct.querySelector(".card").href = link.pathname;
        ct.querySelector(".card").setAttribute("data-navigo", "true");

        ct.querySelector(".title").innerText = link.title;
        if (link.icon)
            ct.querySelector(".icon").replaceChildren(createIcon(link.icon[0], link.icon[1]));
        page.appendChild(ct);
    }
    return page;
}

export async function shell(userDetails) {
    userDetails["selectedRoute"] = getRoute(userDetails.sitemap);
    await Promise.all([renderNavbar(userDetails), renderPage(userDetails), renderUserDetails(userDetails)]);
    initRouter3(document.querySelector("#page-body"), userDetails);
}