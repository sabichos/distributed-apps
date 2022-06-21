import styled from "styled-components";


export const WizardStepViewStyle = styled.div`
ul {
    padding: 0;
    list-style:none;
}

ul li {
    display: flex;
    align-items: center;
    gap: var(--size-xl);
    padding-block: var(--size-sm);
    border-bottom: 1px solid var(--color-light-medium);
}

.icon svg { width:32px; height:32px; fill:var(--color-dark);}

`;


export const WizardStepEditorStyle = styled.div`

.step-body {
     padding: 0 var(--size-sm);
}

h2 {
    font:var(--font-md);
}

.form-control {
     display: flex;
     flex-direction:column;
     margin-bottom:var(--size-lg);
}

.form-control label {
    color: var(--color-medium);
    font:var(--font-md);
}

.form-control input {
    border:none;
    border-bottom: 1px solid var(--color-dark);
    outline:none;
}


.legal{
    max-width:33vw;
    font:var(--font-sm);
}

footer {
     border-top: 1px solid var(--color-medium);
     padding: var(--size-sm);
     margin-top: var(--size-lg);
}

footer button {
    background-color: var(--color-accent1);
    border:none;
    padding:var(--size-xs) var(--size-lg);
    border-radius: 2px;
    color:var(--color-white);
    text-transform: uppercase;
    margin: 0 auto;
    display: block;
    font: var(--font-lg);
    font-weight: 100;
}

footer button:hover {
    opacity: 0.8;
    transition: opacity .3s;
}


`;