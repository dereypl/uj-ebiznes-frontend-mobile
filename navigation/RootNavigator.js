import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ContentNavigator from "./ContentNavigator";

const RootStack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                <RootStack.Screen
                    name="App"
                    component={ContentNavigator}
                    options={{
                        animationEnabled: false
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;