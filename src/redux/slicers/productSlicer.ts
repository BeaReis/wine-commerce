import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        holdProductInfo(state, action) {

        },
        clearProductInfo(state, action) {

        }
    }
});

export default productSlice.reducer;