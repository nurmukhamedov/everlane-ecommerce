import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('fetchProducts', async (url) => {
    try {
        const data = await fetch(url);
        return data.json();
    } catch (error) {
        console.error(error)
    }
});

const getDataSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        error: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                if (action.payload.message === 'Page Not Found') {
                    state.error = true;
                    state.errorMessage = action.payload.message;
                }
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.products = [];
            });
    }
});

export default getDataSlice.reducer;
