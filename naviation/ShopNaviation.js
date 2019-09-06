import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';


const ProductNavigator = createStackNavigator(
    {
        ProductsOverview: ProductOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: 'white'
        }
    }
);

export default createAppContainer(ProductNavigator);