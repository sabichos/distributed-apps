import styled from "styled-components";


export const TransactionsViewStyle = styled.div`
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
`;