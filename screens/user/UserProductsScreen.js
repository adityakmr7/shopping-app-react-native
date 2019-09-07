import React from 'react';
import { View, Text,Button ,StyleSheet, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';

const UserProductsScreen = () => {
    const userProduct = useSelector(state => state.products.userProducts);

    return (
        <FlatList
            data={userProduct}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    imageUrl={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {}}

                >
                    <Button color={Colors.primary} title="Edit" onPress={() => {}} />
                    <Button
                        color={Colors.primary}
                        title="Delete"
                        onPress={() => {}}
                    />       
                </ProductItem>
            )}
        />
    );
}

const styles = StyleSheet.create({
    
})

UserProductsScreen.navigationOptions = {
    headerTitle: 'User Product'
}


export default UserProductsScreen;