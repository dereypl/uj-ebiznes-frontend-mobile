import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from "react-redux";
import {removeFromBasket} from "../basketReducer";

const BasketListItem = ({data}) => {
    const dispatch = useDispatch()
    const handleRemoveProduct = () => dispatch(removeFromBasket(data.id))
    return (
        <TouchableOpacity style={styles.item} activeOpacity={1} onPress={handleRemoveProduct}>
            <View style={styles.content}>
                <View style={styles.product}>
                    <Text style={styles.productName}>{data.name}</Text>
                </View>
            </View>
            <View style={{
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 1,
                borderColor: '#efefef',
                width: '100%',
                marginBottom: 10,
                opacity: .4,
            }}/>
            <View style={styles.details}>
                <View style={styles.priceBox}>
                    <Text style={styles.price}>{data.price.toFixed(2)}</Text>
                    <Text style={styles.currency}>zł</Text>
                </View>
                <Text style={styles.detailsText}>Usuń produkt ></Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        height: 150,
        marginBottom: 7,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        backgroundColor: '#021019',
        borderRadius: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        height: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        color: '#dedede',
        marginRight: 10,
        fontSize: 11,
        alignItems: 'center',
    },
    content: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    product: {
        justifyContent: 'center',
        height: 70,
        alignItems: 'center',

    },
    productName: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: -3,
    },
    products: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    detailsText: {
        color: '#d4d4d4',
    },
    priceBox: {
        width: '30%',
        height: 23,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#dedede',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    price: {
        color: '#021019',
        fontWeight: 'bold',
        marginRight: 5,
    },
    currency: {
        color: '#7a8287',
    },
});


export default BasketListItem;
