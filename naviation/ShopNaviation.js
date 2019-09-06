import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrdersScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';


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
        defaultNavigationOptions: defaultConfig
    }
);


const OrderNavigator = createStackNavigator(
    {
        Order: OrderScreen
    },
    {
        defaultNavigationOptions: defaultConfig
    }
)

const ShopNavigator = createDrawerNavigator(
    {
        Products: ProductNavigator,
        Order: OrderNavigator
    },{
        contentOptions: {
            activeTintColor: Colors.primary
        }
    }
)



export default createAppContainer(ShopNavigator);