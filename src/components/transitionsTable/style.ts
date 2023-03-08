import styled from "styled-components";

export const Container = styled.div`
margin-top: 4rem;

table{
 width: 100%;
 border-spacing: 0 0.5rem
}
th{
    color: #969CB3;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem
}
td{
    padding: 1rem 2rem;
    border: 0;
    background: #FFF;
    color: #969CB3;
    border-radius: 0.25rem;

    &:first-child{
        color: #363F5F;
    }
    &.withdrown{
        color:#E52E4D
    }
    &.deposit{
        color:#33CC95
    }
}
;`
