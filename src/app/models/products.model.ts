export interface Product {
    id: number,
    title: string,
    category: string,
    image: string,
    price: number,
    stock: number,
    rating: Rating,
    quantity?: number;
}

export interface Rating {
    rate: number,
    count: number
}