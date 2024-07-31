import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IOrder, OrdersState } from '@/types';

const initialState: OrdersState = {
    orders: [],
    status: 'idle',
    error: null,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get('http://localhost:3001/orders');
    return response.data as IOrder[];
});

export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (orderId: number) => {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    return orderId;
});

export const deleteProductFromOrder = createAsyncThunk('orders/deleteProductFromOrder', async (payload: { orderId: number, productId: number }) => {
    const { orderId, productId } = payload;
    await axios.delete(`http://localhost:3001/orders/${orderId}/products/${productId}`);
    return payload;
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
            .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<IOrder[]>) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            })
            .addCase(deleteOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteOrder.fulfilled, (state, action: PayloadAction<number>) => {
                state.status = 'succeeded';
                state.orders = state.orders.filter(order => order.id !== action.payload);
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            })
            .addCase(deleteProductFromOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProductFromOrder.fulfilled, (state, action: PayloadAction<{ orderId: number, productId: number }>) => {
                state.status = 'succeeded';
                const { orderId, productId } = action.payload;
                const order = state.orders.find(order => order.id === orderId);
                if (order) {
                    order.products = order.products.filter(product => product.id !== productId);
                }
            })
            .addCase(deleteProductFromOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    },
});

export default ordersSlice.reducer;
