import { createSlice } from "@reduxjs/toolkit";

const savedCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const storedCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: storedCart,
  },
  reducers: {
    //add to cart
    addToCart(state, action) {
      const item = action.payload;
      const exist = state.cart.find(
        (p) => p.id === item.id && p.source === item.source,
      );
      if (exist) {
        exist.qty += 1;
      } else {
        state.cart.unshift({ ...item, qty: 1 });
      }
      savedCart(state.cart);
    },
    //  Change quantity for +-
    updateQty(state, action) {
      const { id, qty } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.qty = qty;
      }
      savedCart(state.cart);
    },
    //  Remove item
    removeFromCart(state, action) {
      const { id, source } = action.payload;
      console.log(action);
      
      state.cart = state.cart.filter(
        (item) => item.id !== id || item.source !== source,
      );
      savedCart(state.cart);
    },
    
  },
});
export const { addToCart, updateQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
