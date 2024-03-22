import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload.item.item;
            const itemInCartIndex = state.cart.findIndex(item => item.id === newItem.id);

            if (itemInCartIndex !== -1) {
                state.cart[itemInCartIndex].quantity++;
            } else {
                const newItemWithQuantity = { ...newItem, quantity: 1 };
                state.cart.push(newItemWithQuantity);
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload.item.item.id;
            const updatedCart = state.cart.filter(item => item.id !== id)
            return { cart: updatedCart };
        },
        incrementQuantity: (state, action) => {
            const newItem = action.payload.item.item;
            const itemInCartIndex = state.cart.findIndex(item => item.id === newItem.id);
            state.cart[itemInCartIndex].quantity++;
        },
        decrementQuantity: (state, action) => {

            const newItem = action.payload.item.item;
            console.log('deceras', newItem)

            const itemInCartIndex = state.cart.findIndex(item => item.id === newItem.id);

            if (itemInCartIndex.quantity === 1) {
                const updatedCart = state.cart.filter(item => item.id !== newItem.id)
                return { cart: updatedCart };
            } else {
                state.cart[itemInCartIndex].quantity--;
            }

        },
    }
});


export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;