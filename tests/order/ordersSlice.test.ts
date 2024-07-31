import { configureStore } from '@reduxjs/toolkit';
import ordersReducer, {
    fetchOrders,
    deleteOrder,
    deleteProductFromOrder,
} from '../../store/ordersSlice';
import { IOrder, OrdersState } from '@/types';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('ordersSlice', () => {
    const initialState: OrdersState = {
        orders: [],
        status: 'idle',
        error: null,
    };

    const store = configureStore({
        reducer: {
            orders: ordersReducer,
        },
    });

    beforeEach(() => {
        mock.reset();
    });

    it('should handle initial state', () => {
        expect(store.getState().orders).toEqual(initialState);
    });

    it('should handle fetchOrders', async () => {
        const orders: IOrder[] = [
            {
                id: 1,
                title: 'Order 1',
                date: '2017-06-29 12:09:33',
                description: 'desc 1',
                products: [],
            },
        ];

        mock.onGet('http://localhost:3001/orders').reply(200, orders);

        await store.dispatch(fetchOrders() as any);
        expect(store.getState().orders.status).toEqual('succeeded');
        expect(store.getState().orders.orders).toEqual(orders);
    });

    it('should handle deleteOrder', async () => {
        const initialOrdersState: OrdersState = {
            orders: [
                {
                    id: 1,
                    title: 'Order 1',
                    date: '2017-06-29 12:09:33',
                    description: 'desc 1',
                    products: [],
                },
                {
                    id: 2,
                    title: 'Order 2',
                    date: '2017-06-29 12:09:33',
                    description: 'desc 2',
                    products: [],
                },
            ],
            status: 'idle',
            error: null,
        };

        store.dispatch({ type: 'orders/fetchOrders/fulfilled', payload: initialOrdersState.orders });

        mock.onDelete('http://localhost:3001/orders/1').reply(200);

        await store.dispatch(deleteOrder(1) as any);
        expect(store.getState().orders.status).toEqual('succeeded');
        expect(store.getState().orders.orders).toEqual([initialOrdersState.orders[1]]);
    });

    it('should handle deleteProductFromOrder', async () => {
        const initialOrdersState: OrdersState = {
            orders: [
                {
                    id: 1,
                    title: 'Order 1',
                    date: '2017-06-29 12:09:33',
                    description: 'desc 1',
                    products: [
                        {
                            id: 1,
                            serialNumber: 1234,
                            isNew: 1,
                            photo: 'photo_url',
                            title: 'Product 1',
                            type: 'Monitors',
                            specification: 'Specification 1',
                            guarantee: {
                                start: '2017-06-29 12:09:33',
                                end: '2017-06-29 12:09:33'
                            },
                            price: [
                                { value: 100, symbol: 'USD', isDefault: 0 },
                                { value: 2600, symbol: 'UAH', isDefault: 1 }
                            ],
                            order: 1,
                            date: '2017-06-29 12:09:33'
                        }
                    ]
                }
            ],
            status: 'idle',
            error: null,
        };

        store.dispatch({ type: 'orders/fetchOrders/fulfilled', payload: initialOrdersState.orders });

        mock.onDelete('http://localhost:3001/orders/1/products/1').reply(200);

        await store.dispatch(deleteProductFromOrder({ orderId: 1, productId: 1 }) as any);
        expect(store.getState().orders.status).toEqual('succeeded');
        expect(store.getState().orders.orders[0].products).toEqual([]);
    });
});
