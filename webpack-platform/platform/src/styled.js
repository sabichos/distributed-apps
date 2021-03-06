import styled from "styled-components";

export const HomeStyle = styled.div`
height:100%;
display: grid;
grid-template-areas: "header sidebar"
                     "main sidebar"
                     "footer sidebar";
grid-template-columns: auto 400px;
grid-template-rows: min-content auto min-content;
background-color: var(--color-light);


header {
    grid-area: header;
    display: flex;
    padding: var(--size-sm);
    align-items: center;
    gap: var(--size-sm);
    border-bottom: 1px solid var(--color-medium);
}

header svg {
    width: 40px;
    height: 40px;
    fill: var(--color-accent1);
}

header h1 {
    margin:0;
    font: var(--font-xl);
    font-size: 2rem;
    border-inline-start: 1px solid var(--color-medium);
    padding-inline-start: var(--size-sm);
}


.loader {
    grid-area: main;
    text-align: center;
    margin-top: var(--size-sm);
}

#centerpiece {
    grid-area: main;
    padding: var(--size-sm);
    padding-inline-end: var(--size-xl);
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, 48%);
    gap: var(--size-md);
}

aside {
    grid-area: sidebar;
    background-color: var(--color-dark);
    padding: var(--size-md);
}

aside .description {
    color:var(--color-light-medium);
}

aside .logo{
    text-decoration: none;
    font: var(--font-title);
    display: block;
    height: 3rem;
    width: 50%;
    margin: var(--size-sm) auto;
    color: var(--color-accent3);
    text-align: center;
}

footer {
    grid-area: footer;
    border-top: 1px solid var(--color-medium);
    padding: var(--size-sm);
    display: flex;
    align-items: center;
    gap: var(--size-xs);
}

footer .links a {
    color: var(--color-accent2);
    margin-inline: var(--size-xs);
}

`;