import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";
import ProductsListScreen from "../screens/products/list/ProductsListScreen";
import BasketListScreen from "../screens/basket/list/BasketListScreen";

const Tabs = createBottomTabNavigator();
function Navigator() {
    return (
        <Tabs.Navigator
            initialRouteName="Produkty"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    switch (route.name){
                        case 'Produkty': {
                            iconName = focused ? 'format-list-bulleted': 'format-list-bulleted';
                            break;
                        }
                        case 'Koszyk': {
                            iconName = focused ? 'shopping-cart': 'shopping-cart';
                            break;
                        }
                        default: break;
                    }

                    return <MaterialIcons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#cca696',
                inactiveTintColor: '#606060',
                style:{height:60, paddingBottom: 10},
                labelStyle: {
                    marginTop: -6
                }
            }}
        >
            <Tabs.Screen name="Produkty" component={ProductsListScreen}/>
            <Tabs.Screen name="Koszyk" component={BasketListScreen} />
        </Tabs.Navigator>
    );
}
export default Navigator