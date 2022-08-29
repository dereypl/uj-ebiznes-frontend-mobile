import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ProductsListScreen from "./list/ProductsListScreen";

const Products = createStackNavigator();
const ProductsScreen = () => {
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