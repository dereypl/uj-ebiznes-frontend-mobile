import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ProductsListScreen from "./list/ProductsListScreen";
import {useDispatch} from "react-redux";

const Products = createStackNavigator();
const ProductsScreen = () => {
    const dispatch = useDispatch();
    return (
        <Products.Navigator>
            <Products.Screen
                name="Produkty"
                component={ProductsListScreen}
                options={{
                    headerTitle: 'Produkty',
                }}
            />
        </Products.Navigator>
    );
};

export default ProductsScreen;