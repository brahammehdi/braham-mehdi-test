export class Product {
    id: number;
    name: string;
    categoryId: number;
    description: string;
    oldPrice: number;
    price: number;
    discount: number;
    evaluation: number;
    quantity: number;
    commentsCount: number;
    colors: string[];
    models: string[];
    deliveryMinDays: number;
    deliveryMaxDays: number;
    attachements: Attachement[];
    creationDate: string;
}

export class Attachement {
    id: number;
    url: string;
}
