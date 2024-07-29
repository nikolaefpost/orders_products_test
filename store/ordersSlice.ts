import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {IOrder} from "@/types";


interface OrdersState {
    orders: IOrder[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined | null;
}

const initialState: OrdersState = {
    orders: [],
    status: 'idle',
    error: null,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get('http://localhost:3001/orders');
    return response.data;
});

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        removeOrder: (state, action: PayloadAction<number>) => {
            state.orders = state.orders.filter(order => order.id !== action.payload);
        },
    },
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
                state.error = action.error.message;
            });
    },
});

export const { removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
