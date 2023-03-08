import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: #363f5f;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: #969cb3;
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    border: 0;
    background: #33cc95;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransitionTypeArea = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr  1fr;
gap: 0.25rem;


`
interface propstype{
  isactive:boolean,
  activeColor: 'green'|'red'
}

const colors ={
  green:'#33CC95',
  red: '#E52E4D',
}

export const TypeBox = styled.button<propstype>`
height: 4rem;
 border: 1px solid #d7d7d7;
 border-radius: 0.25rem;

 background: ${(props) => props.isactive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};
 display: flex;
 align-items:center;
justify-content:center;

img{
  width: 20px;
  height: 20px;
}
span{
  display: inline-block;
  margin-left: 1rem;
  font-size:1rem;
  color: #363F5F;
 transition: 0.2s;
}
&:hover{
  border-color: ${darken(0.1, '#d7d7d7')};
}
`
