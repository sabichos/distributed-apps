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
    color: var(--color-blue-500);
    border: none;
    background-color: transparent;
    text-align:end;
    
}
.btn-link:hover {
    color: var(--color-gray-700);
}
.btn-link:disabled {
    color: var(--color-gray-500);
    cursor: not-allowed;
}

.icon-success {
    width:16px;
    height:16px;
    fill: var(--color-green-500);
    margin-inline-start: -20px;
    z-index: 1;
}

`;

export const SpinnerStyle = styled.div`
width: auto;
border-radius: 50px;
padding: 10px;
display: table;
margin: 0 auto;
position: relative;
span {
  height: ${props => props.size || "10px"}; 
  width: ${props => props.size || "10px"}; 
  float: left;
  margin: 0 2px;
  background-color: ${props => props.inverse ? "var(--color-orange-500)" : "var(--color-gray-100)"};
  display: block;
  border-radius: 50%;
  opacity: 0.2;
}
span:nth-child(1){
    animation: 1.1s bounceIn infinite .36666s;
}
span:nth-child(2){
    animation: 1.1s bounceIn infinite .73332s;
}
span:nth-child(3){
    animation: 1.1s bounceIn infinite 1.09998s;
}

@keyframes bounceIn {

    from,
    20%,
    40%,
    60%,
    80%,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
    }

    20% {
        transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
        transform: scale3d(.9, .9, .9);
    }

    60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
        transform: scale3d(.97, .97, .97);
    }

    to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
}

`;