import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

interface Order {
    id: number;
    title: string;
    date: string;
    description: string;
    products: Product[];
}

interface Product {
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

interface OrdersState {
    orders: Order[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: OrdersState = {
    orders: [],
    status: 'idle',
    error: null,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get('/orders');
    return response.data;
});

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    },
});

export default ordersSlice.reducer;
