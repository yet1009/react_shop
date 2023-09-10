import {configureStore} from "@reduxjs/toolkit";


import userSlice from "./user/user.slice.js";
import categoriesSlice from "./categories/categories.slice.js";
import productsSlice from "./products/products.slice.js";
import cartSlice from './cart/cart.slice.js'

export const store = configureStore({
    reducer: {
        userSlice,
        categoriesSlice,
        productsSlice,
        cartSlice
    }
})

