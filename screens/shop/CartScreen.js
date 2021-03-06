import React from 'react';
import { View,Text, StyleSheet,Button, FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import * as cartAction from '../../store/actions/cart';
import * as orderAction from '../../store/actions/order';

const CartScreen = (props) => {
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItem =[];
        for(const key in state.cart.items) {
            transformedCartItem.push({
              productId: key,
              productTitle: state.cart.items[key].productTitle,
              productPrice: state.cart.items[key].productPrice,
              quantity: state.cart.items[key].quantity,
              sum: state.cart.items[key].sum  
            })
        }
        return transformedCartItem;   
    }    
    )

    const dispatch = useDispatch();
    return (
        <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress = {()=>{
            dispatch(orderAction.addOrder(cartItems, totalAmount))
            props.navigation.navigate('Order')
          }}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData =>( 
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove ={() => {
                dispatch(cartAction.removeFromCart(itemData.item.productId))
            }}
          />
        )}
      />
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      margin: 20
    },
    summary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: 10,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    summaryText: {
      
      fontSize: 18
    },
    amount: {
      color: Colors.primary
    }
  });
CartScreen.navigationOptions = {
    headerTitle: "Your Cart"
}

export default CartScreen;   