import { useEffect, useState } from "react";
import { Customer } from "../../components/customer/Customer";
import { Header } from "../../components/header/Header";
import { Content, OrderDataContainer, ProductsContainer, OrdersContainer, OrdersTable, OverflowBackground, TableElements, TableLegend, CustomerDataContainer } from "./styles";
import axios from "axios";
import { Customer as CustomerType } from "../../protocols/Customer";
import { OrderData } from "../../protocols/OrderData";
import { Product } from "../../components/product/Product";

export function OrdersPage(){
    const [customer, setCustomer] = useState<CustomerType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [orderData, setOrderData] = useState<OrderData>()
    const [openOrderData, setOpenOrderData] = useState<boolean>(false)

    useEffect(() => {
        getOrders()
    }, [])

    function getOrders(){
        setLoading(true)

        axios.get(`${import.meta.env.VITE_API_URL}/customer`)
        .then(res => {
            setCustomer(res.data.reverse())
            setLoading(false)
        })
        .catch(() => alert('Ocorreu um erro ao tentar buscar os pedidos.'))
    }

    function getOrderData(id: number){
        setOpenOrderData(true)

        axios.get(`${import.meta.env.VITE_API_URL}/customer/${id}`)
        .then(res => setOrderData(res.data))
        .catch(() => {
            alert('Ocorreu um erro ao tentar buscar os dados do pedido.')
            setOpenOrderData(false)
        })
    }
    
    return (
    <>
        <Header/>
        <OrdersContainer>
            <Content loading={`${loading}`}>
                <OrdersTable>
                    {
                    loading ? 
                    (<span className="loading">loading...</span>) :
                    (
                    <>
                    <TableLegend>
                        <span>ID</span>
                        <span className="name">NOME</span>
                        <span className="email">EMAIL</span>
                        <span className="cpf">CPF</span>
                    </TableLegend>
                    <TableElements>
                        {customer.map(cust => (
                            <Customer
                            key={cust.id}
                            getOrderData={getOrderData}
                            id={cust.id}
                            name={cust.name}
                            email={cust.email}
                            cpf={cust.cpf}
                            />
                        ))}
                    </TableElements>
                    </>
                    )}
                </OrdersTable>
                <button 
                disabled={loading}
                onClick={getOrders}>Atualizar Tabela</button>
            </Content>
        </OrdersContainer>
        <OverflowBackground openorderdata={`${openOrderData}`}>
            <OrderDataContainer>
                <span className="title">Detalhes do Pedido</span>
                <span className="customer-title">Dados do cliente</span>
                <CustomerDataContainer>
                    <div className="customer-infos">
                        <div className="info">
                            <span>Nome</span>
                            <span>{orderData?.name}</span>
                        </div>
                        <div className="info">
                            <span>Email</span>
                            <span>{orderData?.email}</span>
                        </div>
                        <div className="info">
                            <span>CPF</span>
                            <span>{orderData?.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}</span>
                        </div>
                    </div>
                    <div className="address">
                        <span className="address-title">Endereço</span>
                        <div className="info">
                            <span>Rua</span>
                            <span>{orderData?.Address.street}, {orderData?.Address.number}</span>
                        </div>
                        {orderData?.Address.complement && 
                        <div className="info">
                            <span>Complemento</span>
                            <span>{orderData?.Address.complement}</span>
                        </div>}
                        <div className="info-container">
                            <div className="info">
                                <span>CEP</span>
                                <span>{orderData?.Address.postal_code.replace(/^(\d{5})(\d)/, '$1-$2')}</span>
                            </div>
                            <div className="info">
                                <span>Bairro</span>
                                <span>{orderData?.Address.neighborhood}</span>
                            </div>
                        </div>
                        <div className="info">
                            <span>Cidade/UF</span>
                            <span>{orderData?.Address.city}/{orderData?.Address.state_code}</span>
                        </div>  
                    </div>
                </CustomerDataContainer>
                <ProductsContainer>
                    <div className="products-title">Produtos</div>
                    <div className="products">
                        {orderData?.Order.map(ord => (
                            <Product 
                            img={ord.Stock.Product.image}
                            name={ord.Stock.Product.name}
                            quantity={ord.quantity}
                            size={ord.Stock.size}
                            />
                        ))}
                    </div>
                </ProductsContainer>
                <button onClick={() => {
                    setOpenOrderData(false)
                    setOrderData(undefined)
                    }}>Fechar</button>
            </OrderDataContainer>
        </OverflowBackground>
    </>
    )
}