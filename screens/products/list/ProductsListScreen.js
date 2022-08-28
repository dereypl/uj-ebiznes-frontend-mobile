import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ProductListItem from "./ProductListItem";
import {getStateRoot} from "../productsReducer";
import {fetchProducts} from "../productsService";


const ProductsListScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {items, loading} = useSelector(getStateRoot).list

    const loadProducts = useCallback(() => {
        dispatch(fetchProducts())
    }, [dispatch, loading])


    useEffect(() => {
        loadProducts()
        // return () => dispatch(setListLoading(true))
    }, [])


    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={'#7a8287'}/>
            </View>
        );
    }

    if (!items.length) {
        return (
            <View style={styles.centered}>
                <Text>Brak produktów.</Text>
            </View>
        );
    }

    return (
        <>
            <FlatList
                refreshControl={<RefreshControl refreshing={loading} onRefresh={null}/>}
                data={items}
                keyExtractor={item => item.id}
                style={{paddingLeft: '5%', paddingRight: '5%'}}
                renderItem={itemData => (
                    <ProductListItem
                        data={itemData.item}
                        onSelect={() => null}
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

export default ProductsListScreen;