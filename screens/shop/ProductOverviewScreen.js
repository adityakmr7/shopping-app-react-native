import React from 'react';
import {Text,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import { FlatList } from 'react-native';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
  
    return (
        <FlatList
            data={products}
            keyExtractor={item=>item.id}
            renderItem={itemData => <ProductItem
                title={itemData.item.title}
                price={itemData.item.price}
                imageUrl = {itemData.item.imageUrl}
                onDetailView={() => {
                    props.navigation.navigate('ProductDetail', {
                        productTitle: itemData.item.title,
                        productId: itemData.item.id
                    })
                }}
                onAddToCart={() => {}}
            />}
        />
    );
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'Products'
}


export default ProductOverviewScreen;   