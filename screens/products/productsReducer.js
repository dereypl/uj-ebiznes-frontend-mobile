import {createSlice} from "@reduxjs/toolkit";

export const getStateRoot = state => state.products;

const productsListReducer = createSlice({
    name: 'products',
    initialState: {
        list: {
            items: [],
            loading: true
        },
    },
    reducers: {
        setProducts(state, {payload}) {
            state.list.items = payload;
        },
        setListLoading(state, {payload}) {
            state.list.loading = payload;
        },
    }
});


export const {
    setProducts,
    setListLoading,
} = productsListReducer.actions;
export default productsListReducer.reducer;
