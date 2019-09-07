import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FlatList,Button, View } from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    
    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
          productId: id,
          productTitle: title
        });
      };

    return (
        <FlatList
            data={products}
            keyExtractor={item=>item.id}
            renderItem={itemData => 
            <ProductItem
                title={itemData.item.title}
                price={itemData.item.price}
                imageUrl = {itemData.item.imageUrl}
                onSelect={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title);
                }}
            >
                <Button
                    color={Colors.primary}
                    title="View Details"
                    onPress={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title);
                    }}
                />
                <Button
                    color={Colors.primary}
                    title="To Cart"
                    onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                    }}
                />
            </ProductItem>
        }
        />
    );
}

ProductOverviewScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'Products',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="cart" 
                    iconName="md-cart"
                    onPress={() => navData.navigation.navigate('Cart')}
                />
            </HeaderButtons>
        ),
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="menu" 
                    iconName="md-menu"
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>            
        )
    }
}


export default ProductOverviewScreen;   