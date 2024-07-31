export interface IProduct {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: {
        start: string;
        end: string;
    };
    price: { value: number; symbol: string; isDefault: number }[];
    order: number;
    date: string;
}

export interface IOrder {
    id: number;
    title: string;
    date: string;
    description: string;
    products: IProduct[];
}

export interface OrdersState {
    orders: IOrder[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined | null;
}

export interface ProductsState {
    products: IProduct[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}