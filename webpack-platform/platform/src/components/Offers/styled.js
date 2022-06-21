import styled from "styled-components";


export const OffersViewStyle = styled.div`
ul {
    padding: 0;
    list-style:none;
}

ul li {
    
    padding-block: var(--size-sm);
    border-bottom: 1px solid var(--color-light-medium);
}

ul li h4 {
    font: var(--font-xl);
    color: var(--color-accent1);
    margin:0 0 var(--size-sm);
    display:flex;
    justify-content: space-between;
}

ul li h4 .optin {
    color:var(--color-accent3)
}
ul li h4 .btn-link {
    border:none;
    background-color:transparent;
    color:var(--color-accent1);
    cursor:pointer;
}

ul li h4 .btn-link:hover {
    animation: 1s glow ease-in-out alternate-reverse;    
}

ul li .date {
    font: var(--font-xs);
    color: var(--color-medium-dark);
    text-align:end;
    margin:var(--size-sm) 0 0 ;
}

@keyframes glow {
    from {  color:var(--color-accent1);  }
    to {  color:var(--color-accent2);   }
  }

`;