import React from 'react';
import { View,Text, StyleSheet, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrderScreen = (props) => {
    const getAllOrder = useSelector(state => state.orders.orders);

    return (
        <FlatList
            data={getAllOrder}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <OrderItem
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />
            )}
        />
    );
}



OrderScreen.navigationOptions = navData=> {
    return {
        headerTitle: 'Your Order',
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


const styles = StyleSheet.create({
    
})

export default OrderScreen;   