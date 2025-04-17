import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  name: string;
  price: number;
}

const basketSlice = createSlice({
  name: "basket",
  initialState: [] as Product[],
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;

const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

export default store;
