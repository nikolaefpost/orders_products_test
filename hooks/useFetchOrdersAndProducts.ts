import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchOrders } from '@/store/ordersSlice';
import { fetchProducts } from '@/store/productsSlice';
import {IOrder, IProduct} from "@/types";

interface UseFetchOrdersAndProductsResult {
    orders: IOrder[];
    ordersStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    ordersError: string | null | undefined;
    products: IProduct[];
    productsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    productsError: string | null;
}

const useFetchOrdersAndProducts = (): UseFetchOrdersAndProductsResult => {
    const dispatch: AppDispatch = useDispatch();

    const orders = useSelector((state: RootState) => state.orders.orders);
    const ordersStatus = useSelector((state: RootState) => state.orders.status);
    const ordersError = useSelector((state: RootState) => state.orders.error);

    const products = useSelector((state: RootState) => state.products.products);
    const productsStatus = useSelector((state: RootState) => state.products.status);
    const productsError = useSelector((state: RootState) => state.products.error);

    useEffect(() => {
        if (ordersStatus === 'idle') {
            dispatch(fetchOrders());
        }
        if (productsStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [ordersStatus, productsStatus, dispatch]);

    return { orders, ordersStatus, ordersError, products, productsStatus, productsError };
};

export default useFetchOrdersAndProducts;

