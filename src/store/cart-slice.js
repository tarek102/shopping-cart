import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action){
            const newItem
         },
        removeFromCart() { },
        setShowCart(state) {
            state.showCart = true
        }
    }
});

export default cartSlice;