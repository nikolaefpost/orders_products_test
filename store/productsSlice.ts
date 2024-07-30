import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct} from "@/types";


interface ProductsState {
    products: IProduct[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:3001/products');
    return response.data;
});

// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: number)=>{
//     await axios.delete(`http://localhost:3001/products/${productId}`)
//     return productId;
// })

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            })
            // .addCase(deleteProduct.pending, (state, action) => {
            //     state.status = 'loading';
            // })
            // .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<number>) => {
            //     state.status = 'succeeded';
            //     state.products = state.products.filter(order => order.id !== action.payload);
            // })
            // .addCase(deleteProduct.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error.message || null;
            // })
    },
});

export const {removeProduct} = productsSlice.actions;

export default productsSlice.reducer;
