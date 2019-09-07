import React from 'react';
import { Button ,StyleSheet, FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import * as productActions from '../../store/actions/product';

const UserProductsScreen = (props) => {
    const userProduct = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    const editProductHandler = id => {
        props.navigation.navigate('EditProduct', {productId: id})
    }
    return (
        <FlatList
            data={userProduct}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    imageUrl={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        editProductHandler(itemData.item.id)
                    }}

                >
                    <Button color={Colors.primary} 
                        title="Edit" 
                        onPress={() => {
                            editProductHandler(itemData.item.id)
                        }} />
                    <Button
                        color={Colors.primary}
                        title="Delete"
                        onPress={() => {
                            
                            dispatch(productActions.deleteProduct(
                                itemData.item.id
                            ));
                        }}
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

UserProductsScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Products',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={ 'md-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="create"
            iconName={ 'md-create'}
            onPress={() => {
              navData.navigation.navigate('EditProduct');
            }}
          />
        </HeaderButtons>
      )
    };
  };
  
export default UserProductsScreen;