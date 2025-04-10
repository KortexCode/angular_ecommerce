
export interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    category: string;
}

export interface ProductCart extends Product {
    quantity: number;
    quantityPrice: number;
}



