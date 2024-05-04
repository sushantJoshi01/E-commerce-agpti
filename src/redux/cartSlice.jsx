import { createSlice } from "@reduxjs/toolkit";

// Load cart items from localStorage or use an empty array as initial state
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, title, price, quantity = 1 } = action.payload;
            // Check if the item is already in the cart
            const existingItem = state.find(item => item.id === id);

            if (existingItem) {
                // If item already exists, update its quantity
                existingItem.quantity += quantity;
            } else {
                // Otherwise, add the item to the cart
                state.push({ id, title, price, quantity });
            }
            // Update localStorage with the updated cart state
            localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteFromCart(state, action) {
            // Filter out the item with matching ID
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

// Selector to calculate total amount based on cart items
export const selectCartTotal = state =>
    state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);

export default cartSlice.reducer;
