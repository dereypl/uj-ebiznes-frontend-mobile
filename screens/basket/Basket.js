import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import BasketListScreen from "./list/BasketListScreen";

const Basket = createStackNavigator();
const BasketScreen = () => {
    return (
            <Basket.Screen
                name="Koszyk"
                component={BasketListScreen}
                options={{
                    headerTitle: 'Koszyk',
                }}
            />
    );
};

export default BasketScreen;