import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItems: (state, action) => {
      const cartItems = state.cart.find(
        (item) =>
          item._id === action.payload._id && item.selectedSize === action.payload.selectedSize
      );
      if (cartItems) {
        cartItems.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (each) => each._id !== action.payload._id || each.selectedSize !== action.payload.selectedSize
      );
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.cart.find(
        (item) =>
          item._id === action.payload._id && item.selectedSize === action.payload.selectedSize
      );
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        // Optional: If quantity is 1, do nothing
      }
    },
  },
});

export const { addItems, removeItem, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
