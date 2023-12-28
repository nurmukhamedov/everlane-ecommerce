import { configureStore } from "@reduxjs/toolkit";

import getProductsReducer from "../slice/products";
import getCartProductsReducer from '../slice/cart';

const store = configureStore({
    reducer: {
        getProducts: getProductsReducer,
        getCartProducts: getCartProductsReducer
    }
})

export default store;