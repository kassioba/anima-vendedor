import { Customer } from "./Customer"

export type OrderData = Customer & {
    Address: Address
    Order: Order[]
}

type Address = {
    city: string
    complement: string
    customer_id: number
    id: number
    neighborhood: string
    number: string
    postal_code: string
    state_code: string
    street: string
    updatedAt?: string
    createdAt?: string
}

type Order = {
    id: number
    customer_id: number
    quantity: number
    stock_id: number
    updatedAt?: string
    createdAt?: string
    Stock: Stock
}

type Stock = {
    id: number
    product_id: number
    quantity: number
    size: string
    updatedAt?: string
    createdAt?: string
    Product: Product
}

type Product = {
    id: number
    image: string
    image_alt: string
    name: string
    price: number
    description: string
    updatedAt?: string
    createdAt?: string
}