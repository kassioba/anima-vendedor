import styled from "styled-components";

export const OrdersContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 150px);
    display: flex;
    align-items: center;
    justify-content: center;
`

type ContentProps = { loading: 'true' | 'false' }

export const Content = styled.div<ContentProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: 250px;
        height: 50px;
        margin-top: 20px;
        border: 1px solid #000;
        border-radius: 10px;
        background-color: #fff;
        cursor: pointer;
        font-size: 16px;

        &:hover{
            background-color: ${props => props.loading === 'false' && '#c1c1c1'};
        }
    }
`

export const OrdersTable = styled.div`
    width: 800px;
    height: 350px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;

    .loading{
        color: #fff;
        font-size: 20px;
    }

    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`
export const TableLegend = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 35px;
    box-sizing: border-box;
    color: #fff;

    .name{
        margin-left: 142px;
    }

    .email{
        margin-left: 190px;
    }

    .cpf{
        margin-left: 145px;
    }
`

export const TableElements = styled.div`
    height: 310px;
    width: 100%;
    background-color: aliceblue;
    padding: 15px 10px;
    box-sizing: border-box;
    overflow-x: hidden;

    >:not(:first-child){
        margin-top: 10px;
    }
`

type OverflowBackgroundProps = { openorderdata: 'true' | 'false' }

export const OverflowBackground = styled.div<OverflowBackgroundProps>`
    position: fixed;
    background-color: #ffffff90;
    height: 100vh;
    width: 100vw;
    display: ${props => props.openorderdata === 'true' ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 0;
`

export const OrderDataContainer = styled.div`
    height: 500px;
    width: 500px;
    background-color: #c7c7c7;
    display: flex;
    flex-direction: column;

    .title{
        text-align: center;
        font-size: 30px;
    }

    .customer-title{
        margin-top: 10px;
        text-align: center;
        font-size: 20px;
    }
`

export const CustomerDataContainer = styled.div`
    height: 190px;
    display: flex;

    .customer-infos{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .address-title{
        font-weight: 700;
    }

    .address{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .info{
        height: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        :first-child{
            font-weight: 700;
        }
    }

    .info-container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
`

export const ProductsContainer = styled.div`
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .products-title{
        text-align: center;
        font-size: 20px;
    }

    .products{
        height: 160px;
        width: 200px;
        border: 1px solid #000;
        overflow-x: hidden;
        background-color: #fff;

        &::-webkit-scrollbar {
        width: 4px;
        }

        &::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        &::-webkit-scrollbar-thumb {
        background: #888;
        }

        &::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }
`
