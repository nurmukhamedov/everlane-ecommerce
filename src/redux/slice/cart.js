import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const cartProducts = createAsyncThunk('cardProducts', async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
});

export const addCartProducts = createAsyncThunk('addCartProducts', async (cartData) => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartData)
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
})

const getCartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        cart: [],
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(cartProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(cartProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                if (action.payload.message === 'Page Not Found') {
                    state.error = true;
                    state.errorMessage = action.payload.message;
                }
            })
            .addCase(cartProducts.rejected, (state) => {
                state.loading = false;
                state.error = true
            })
            .addCase(addCartProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(addCartProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = [...state.cart, action.payload];
                if (action.payload.message === 'Page Not Found') {
                    state.error = true;
                    state.errorMessage = action.payload.message;
                }
            })
            .addCase(addCartProducts.rejected, (state) => {
                state.error = true;
            })
    }
})

export default getCartSlice.reducer;
