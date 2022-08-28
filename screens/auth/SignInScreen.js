import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const SignInScreen = ({navigation}) => {
    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{x: 0, y: 0}}
            contentContainerStyle={styles.screen}
            scrollEnabled={false}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>LOGOWANIE</Text>
            </View>
            <View style={styles.inputsContainer}>
                <Text>Przejdź do aplikacji > </Text>
            </View>
        </KeyboardAwareScrollView>
    );
};


const styles = StyleSheet.create({
    screen: {
        padding: 10,
        paddingTop: '10%',
        alignContent: "flex-start",
        alignItems: 'center',
    },
    buttonText: {
        color: '#efefef'
    },
    headerContainer: {
        alignContent: "flex-start",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: '65%',
    },
    headerText: {
        fontSize: 15,
        fontWeight: "bold",
    },
})

export default SignInScreen;