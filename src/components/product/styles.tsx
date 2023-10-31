import styled from "styled-components";

export const ProductContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    box-sizing: border-box;

    img{
        height: 90%;
        width: auto;
    }
`

export const ProductInfo = styled.div`
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 14px;
    margin-left: 10px;
`