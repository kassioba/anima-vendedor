import { ProductContainer, ProductInfo } from "./styles";

type ProductProps = { img: string, name: string, quantity: number, size: string }

export function Product({ img, name, quantity, size }: ProductProps){

    return (
        <ProductContainer>
            <img src={img} alt=""/>
            <ProductInfo>
                <span>{name}</span>
                {size !== "NA" && <span>Tamanho: {size}</span>}
                <span>Quantidade: {quantity}</span>
            </ProductInfo>
        </ProductContainer>
    )
}