import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart: (state, action) => {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },

        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({ id: newItem.id, name: newItem.name, price: newItem.price, quantity: 1, total: newItem.price })
            } else {
                existingItem.quantity++;
                existingItem.total += existingItem.price;
            }
            state.totalQuantity++;
        },

        removeItem: (state, action) => {
            const itemID = action.payload;
            const existingItem = state.items.find((item) => item.id === itemID);

            if (existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.total -= existingItem.price;
            } else {
                state.items.filter((item) => item.id !== itemID);
            }

            state.totalQuantity--;
        }
    }
})

export const cartSliceReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;