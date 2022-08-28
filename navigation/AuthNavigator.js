import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{title: "ebiznes"}}
            />
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;