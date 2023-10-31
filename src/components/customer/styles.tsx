import styled from "styled-components";

export const CustomerContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color: #000;
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;

    &:hover{
        background-color: #636262;
    }
`

export const Id = styled.div`
    width: 60px;
    margin-left: 3px;
    text-align: center;
`

export const Name = styled.div`
margin-left: 30px;
width: 230px;
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis;
text-align: center;
`

export const Email = styled.div`
width: 200px;
margin-left: 30px;
overflow: hidden;
text-overflow: ellipsis;
text-align: center;
`

export const Cpf = styled.div`
margin-left: 30px;
`

