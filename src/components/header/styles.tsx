import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 150px;
    background-color: black;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 75px;
    padding-right: 150px;
    box-sizing: border-box;

    .logo{
        font-size: 45px;
        cursor: pointer;
    }
`

export const Pages = styled.div`
    width: 225px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;

    .page{
        cursor: pointer;
    }
`