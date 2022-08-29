import {createSlice} from "@reduxjs/toolkit";

export const getStateRoot = state => state.basket;

const basketListReducer = createSlice({
    name: 'basket',
    initialState: {
        list: {
            items: [],
        },
    },
    reducers: {
        setBasketItems(state, {payload}) {
            state.list.items = payload;
        },
        addToBasket(state, {payload}) {
            state.list.items = [...state.list.items, payload];
        },
        removeFromBasket(state, {payload}) {
            state.list.items = [...state.list.items.filter(items => items.id !== payload)]
        },
    }
});


export const {
    addToBasket,
    removeFromBasket
} = basketListReducer.actions;
export default basketListReducer.reducer;
