export interface Product {
    id: number,
    title: string,
    category: string,
    image: string,
    price: number,
    stock?: number | undefined,
    rating: Rating
}

export interface Rating {
    rate: number,
    count: number
}