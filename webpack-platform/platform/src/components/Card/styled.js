import styled from "styled-components";


export default styled.section`

box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
border: none;
background-color: var(--color-white);

${prop => prop.active ? "background-color: var(--color-light-accent1);" : ""}


.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-medium);
    margin-bottom: var(--size-sm);
    padding: var(--size-sm);
}

.header h2 {
    margin:0;
}

.header button {
    border:none;
    background-color: transparent;
    color: var(--color-accent2);
}

.header button:hover {
    color: var(--color-dark);
}

.body {
    padding: 0 var(--size-sm) var(--size-sm);
}

`;