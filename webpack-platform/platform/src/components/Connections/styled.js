import styled from "styled-components";


export const ConnectionsViewStyle = styled.div`
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


export const ConnectionsEditorStyle = styled.div`
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

.btn-remove{
    border:none;
    background-color:transparent;
    flex: auto;
    text-align: end;
}
.btn-remove svg {
    width:20px; height:20px; fill:var(--color-accent2);
}
`;