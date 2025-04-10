
export interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    description: string;
}

export interface ProductCart extends Product {
    quantity: number;
    quantityPrice: number;
}

export interface ProductResponse {
    products: Product[]; 
}


