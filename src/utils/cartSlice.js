import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      const existingItem = state.items.find(item => item.card.info.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemsFromCart: (state, action) => {
      // Find the index of the item in the cart
      const index = state.items.findIndex(item => item.id === action.payload.id);

      if (index !== -1) {
        // If the item is in the cart, decrease its quantity
        state.items[index].quantity -= 1;

        // If the quantity becomes 0, remove the item from the cart
        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItemsToCart, removeItemsFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
