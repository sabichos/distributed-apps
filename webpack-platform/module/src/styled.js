import styled from "styled-components";

export const HomeStyle = styled.div`
height:100%;
background-color: var(--color-light);


header {
   text-align:center;
    padding: var(--size-sm);
    border-bottom: 1px solid var(--color-medium);
    min-width: fit-content;
    width:40vw;
    margin: 0 auto;
    font-weight: 100;
}


header h1 {
    margin:0;
    font: var(--font-xl);
    font-size: 2rem;
    padding-inline-start: var(--size-sm);
}


.loader {
    grid-area: main;
    text-align: center;
    margin-top: var(--size-sm);
}


#card-wizard {
    min-width: fit-content;
    width:40vw;
    margin: var(--size-sm) auto;
}

.faq-link{
        position:absolute;
        top: calc(50vh - 48px);
        inset-inline-end: 0;
        background-color:var(--color-dark);
        padding: var(--size-xs) var(--size-md) var(--size-xs) var(--size-xs);
        fill:var(--color-white);
}

.faq-link svg {
    with:32px;
    height:32px;
    fill:var(--color-gray-100);
}
`;



export const WizardStyle = styled.div`
`;