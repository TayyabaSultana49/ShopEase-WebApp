import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

// Initial State
const initialState = {
  cartItems: savedCart,
  totalItems: savedCart.reduce(
    (total, item) => total + item.quantity,
    0
  ),
  totalPrice: savedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ),
};

// Function to update totals and save to localStorage
const updateTotals = (state) => {
  state.totalItems = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  state.totalPrice = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  localStorage.setItem(
    "cart",
    JSON.stringify(state.cartItems)
  );
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // Add Product
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      updateTotals(state);
    },

    // Remove Product
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      updateTotals(state);
    },

    // Increase Quantity
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      updateTotals(state);
    },

    // Decrease Quantity
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload
          );
        }
      }

      updateTotals(state);
    },

    // Clear Entire Cart
    clearCart: (state) => {
      state.cartItems = [];
      updateTotals(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;