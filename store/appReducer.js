import {combineReducers} from "@reduxjs/toolkit";
import productsReducer from "../screens/products/productsReducer";

export default combineReducers({
    products: productsReducer,
})
