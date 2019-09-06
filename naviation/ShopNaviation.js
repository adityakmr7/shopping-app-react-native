import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';


const ProductNavigator = createStackNavigator(
    {
        ProductsOverview: ProductOverviewScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTintColor: 'black'
        }
    }
);

export default createAppContainer(ProductNavigator);