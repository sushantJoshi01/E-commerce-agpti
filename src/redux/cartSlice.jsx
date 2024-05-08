import { createSlice } from "@reduxjs/toolkit";

// Load cart items from localStorage or use an empty array as initial state
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, title, price, quantity = 1 } = action.payload;
            const existingItem = state.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice = existingItem.quantity * existingItem.price; // Calculate total price
            } else {
                state.push({ id, title, price, quantity, totalPrice: price * quantity }); // Calculate total price
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        increaseQuantity(state, action) {
            const { id } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.price; // Calculate total price
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        decreaseQuantity(state, action) {
            const { id } = action.payload;
            const item = state.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice = item.quantity * item.price; // Calculate total price
                localStorage.setItem('cart', JSON.stringify(state));
            }
        }
    }
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
