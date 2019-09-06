import React from 'react';
import {Text,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import { FlatList } from 'react-native';

const ProductOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={item=>item.id}
            renderItem={itemData => <Text>{itemData.item.title}</Text>}
        />
    );
}

const styles = StyleSheet.create({
    
})

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'Products'
}


export default ProductOverviewScreen;   