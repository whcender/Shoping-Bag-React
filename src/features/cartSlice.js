import { createSlice } from "@reduxjs/toolkit";
import cardItems from "../cartItems"

const initialState = {
    cartItems : cardItems,
    amount : 4,
    total : 0,
    isLoading : true,
};


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        clearItems : (state) => {
            state.cartItems = [];
        },
        removeItem : (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },
        increaseAmount : (state, action) => {
            const id = action.payload;
            const newCart = state.cartItems.map((item) => {
                if(item.id === id) {
                    item.amount += 1;
                }
                return item;
            });
            state.cartItems = newCart;

        },
        decreaseAmount : (state, action) => {
            const id = action.payload;
            const newCart = state.cartItems.map((item) => {
                if(item.id === id) {
                    item.amount -= 1;
                }
                return item;
            }).filter((item) => item.amount !== 0);
            state.cartItems = newCart;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total.toFixed(2);
          },
    },
});

// console.log(cartSlice);

export const { clearItems, removeItem, increaseAmount, decreaseAmount, calculateTotals  } = cartSlice.actions;
export default cartSlice.reducer;