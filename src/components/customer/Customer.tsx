import { Customer as CustomerType } from "../../protocols/Customer";
import { Cpf, CustomerContainer, Email, Id, Name } from "./styles";

type CustomerProps = CustomerType & { getOrderData: (id: number) => void }

export function Customer({id, name, email, cpf, getOrderData}: CustomerProps){
    return (
        <CustomerContainer onClick={() => getOrderData(id)}>
            <Id>{id}</Id>
            <Name>{name}</Name>
            <Email>{email}</Email>
            <Cpf>{
            cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
            }</Cpf>
        </CustomerContainer>
    )
}