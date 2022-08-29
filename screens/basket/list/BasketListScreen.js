import React from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import BasketListItem from "./BasketListItem";
import {getStateRoot} from "../basketReducer";


const BasketListScreen = ({navigation}) => {
    const {items} = useSelector(getStateRoot).list

    if (!items.length) {
        return (
            <View style={styles.centered}>
                <Text>Koszyk jest pusty.</Text>
            </View>
        );
    }

    return (
        <>
            <FlatList
                refreshControl={<RefreshControl onRefresh={null}/>}
                data={items}
                keyExtractor={item => item.id}
                style={{paddingLeft: '5%', paddingRight: '5%'}}
                renderItem={itemData => (
                    <BasketListItem
                        data={itemData.item}
                    />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    typeSelector: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    Text: {
        color: '#021019',
        fontSize: 11,
    }
});

export default BasketListScreen;