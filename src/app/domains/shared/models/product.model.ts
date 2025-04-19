import { Category } from "./category.model";

export interface Product {
    id: number;
    slug: string;
    images: string[];
    title: string;
    price: number;
    description: string;
    category: Category;
    creationAt: string;
    updatedAt: string
}

export interface ProductCart extends Product {
    quantity: number;
    quantityPrice: number;
}



