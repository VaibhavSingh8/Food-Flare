import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { addItemsToCart, removeItemsFromCart, clearCart } from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;