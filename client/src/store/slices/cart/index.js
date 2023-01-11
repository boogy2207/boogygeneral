import { createSlice } from "@reduxjs/toolkit";

const CART = "cart";
const COUNT = "count";
const SUBTOTAL = "subTotal";

const initialState = {
  cart: [],
  count: 0,
  subTotal: 0,
};

localStorage.getItem(CART) && (initialState.cart = localStorage.getItem(CART));
localStorage.getItem(COUNT) &&
  (initialState.count = JSON.parse(localStorage.getItem(CART)).length);
localStorage.getItem(SUBTOTAL) &&
  (initialState.subTotal = JSON.parse(localStorage.getItem(SUBTOTAL)));

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity = 1 } = action.payload;
      const item = { id, title, price, quantity };
      if (state.cart.some((item) => item.id === id)) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        localStorage.setItem(CART, JSON.stringify([...state.cart, item]));
        state.cart = [...state.cart, item];
      }
      state.count++;
      localStorage.setItem(COUNT, state.count);
      if (!isNaN(Number(price))) {
        state.subTotal += Number(price);
        localStorage.setItem(SUBTOTAL, state.subTotal);
      }
    },
    deleteItemFromCart: (state, action) => {
      const { id, price } = action.payload;
      if (state.cart.some((item) => item.id === id)) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            item.quantity -= 1;
          }
          return item;
        });
      } else {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
      state.count--;
      if (!isNaN(Number(price))) {
        state.subTotal -= Number(price);
      }
    },
  },
});

export const { addToCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
