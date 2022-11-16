import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./slicers/catalogSlicer";
import productReducer from "./slicers/productSlicer";

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        product: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
