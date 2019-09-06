import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FlatList } from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import * as cartAction from '../../store/actions/cart';
const ProductOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
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
                onAddToCart={() => {
                    //check if its working
                    dispatch(cartAction.addToCart(itemData.item))
                }}
            />}
        />
    );
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'Products'
}


export default ProductOverviewScreen;   