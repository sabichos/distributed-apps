import styled from "styled-components";

export default styled.div`
.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.subrow{
    display:flex;
    align-items:center;
}

.btn-link {
    color: var(--color-accent2);
    border: none;
    background-color: transparent;
    text-align:end;
    
}
.btn-link:hover {
    color: var(--color-dark);
}
.btn-link:disabled {
    color: var(--color-medium);
    cursor: not-allowed;
}

.icon-success {
    width:16px;
    height:16px;
    fill: var(--color-accent1);
    margin-inline-start: -20px;
    z-index: 1;
}

`;