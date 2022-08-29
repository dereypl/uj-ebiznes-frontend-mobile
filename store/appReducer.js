import {combineReducers} from "@reduxjs/toolkit";
import productsReducer from "../screens/products/productsReducer";
import basketReducer from "../screens/basket/basketReducer";

export default combineReducers({
    products: productsReducer,
    basket: basketReducer,
})
