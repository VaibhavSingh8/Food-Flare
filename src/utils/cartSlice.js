import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: ['burger', 'tea'],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      //mutating the state here i.e., modifying the existing state directly
      state.items.push(action.payload);
    },
    removeItemsFromCart: (state) => {
      state.items.pop()
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItemsToCart, removeItemsFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
