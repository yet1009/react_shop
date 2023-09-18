import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (category, thunkAPI) => {
        console.log(thunkAPI)
        try {

            let response;
            if(category) {
                response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            }else {
                response = await axios.get("https://fakestoreapi.com/products")
            }
            // https://fakestoreapi.com/products/category/
            console.log("@@@", response)
            return response?.data
        }catch(err) {
            thunkAPI.rejectWithValue("Error loading products")
        }
    }
)


const initialState = {
    products: [],
    isLoading: false,
    error: '',
}



export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => { //reducer를 추가하면 promise의 진행상태에 따라서 리듀서를 실행가능함.
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

    },

})

export default productsSlice.reducer