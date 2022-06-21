import styled from "styled-components";

export const IdentityViewStyle = styled.section`

div{display:flex;margin-bottom: var(--size-xs);}
.label {flex:1;}
.value {flex:2;}

`;


export const IdentityEditorStyle = styled.section`

display:flex;
flex-direction:column;
   
.form-field { display:grid;  grid-template-columns: 150px auto; margin-bottom: var(--size-xs);}

.btn-submit {
    margin: var(--size-sm) 0;
    margin-inline-start: 150px;
    padding: 5px 10px;
}


`;