import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Catalog } from "../../types/catalog";

export type InitialState = {
  loading: boolean;
  catalog: Catalog | null;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  catalog: null,
  error: "",
};

/* createAsyncThunk - It generates promise lifecycle action types based on the action type prefix that you pass in, 
and returns a thunk action creator that will run the promise callback and dispatch the lifecycle
actions based on the returned promise. Bonus: Thunk allows you to return a function rather than the object*/

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  (page: number) => {
    return axios
      .get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`)
      .then((response) => response.data);
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCatalog.fulfilled,
      (state, action: PayloadAction<Catalog>) => {
        state.loading = false;
        state.catalog = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchCatalog.rejected, (state, action) => {
      state.loading = false;
      state.catalog = null;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default catalogSlice.reducer;
