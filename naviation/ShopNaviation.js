import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrdersScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import { Ionicons } from '@expo/vector-icons';


const defaultConfig = {
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: 'white'
}

const ProductNavigator = createStackNavigator(
    {
        ProductsOverview: ProductOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen,
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
              <Ionicons
                name={'md-cart'}
                size={23}
                color={drawerConfig.tintColor}
              />
            )
        },
        defaultNavigationOptions: defaultConfig
    }
);


const OrderNavigator = createStackNavigator(
    {
        Order: OrderScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                name={'md-list'}
                size={23}
                color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultConfig
    }
)


const AdminNavigator = createStackNavigator(
    {
        UserProduct: UserProductsScreen
    },{
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons 
                    name="md-create"
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultConfig
    }
)

const ShopNavigator = createDrawerNavigator(
    {
        Products: ProductNavigator,
        Order: OrderNavigator,
        Admin: AdminNavigator
    },{
        contentOptions: {
            activeTintColor: Colors.primary
        }
    }
)



export default createAppContainer(ShopNavigator);