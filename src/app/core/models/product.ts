import { Image } from "./image";

export class Product {
    id: number;
    categoryId: number;
    name: string;
    description: string;
    rating: number;
    about: string;
    price: number;
    QOH: number;
    primaryImageId: number;
    images: Image[];
}
