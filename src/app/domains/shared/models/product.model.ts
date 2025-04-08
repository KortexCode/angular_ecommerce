
export interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    description: string;
}

export interface ProductResponse {
    products: Product[]; 
}


