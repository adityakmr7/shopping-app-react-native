import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import { View, ScrollView, Text, TextInput, StyleSheet, Platform } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';


const EditProductScreen = (props) => {
    
    const prodId = props.navigation.getParam('productId');
    
    const editedProduct = useSelector(state => {
        return state.products.userProducts.find(prod => prod.id === prodId);
         
    })
    

    const submitHandler = useCallback(() => {
        console.log('Submitting');
    },[]);


    useEffect(() => {
        props.navigation.setParams({submit: submitHandler});
    }, [submitHandler])
    
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');


    

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image Url</Text>
                    <TextInput
                        style={styles.input}
                        value={imageUrl}
                        onChangeText={text => setImageUrl(text)}
                    />
                </View>
                {editedProduct  ? null :(
                    <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        onChangeText={text => setPrice(text)}
                    />
                    </View>
                )}
                
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={text => setDescription(text)}
                    />
                </View>
            </View>
        </ScrollView>
    );
}


EditProductScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit');
    return {
        headerTitle: 'Edit Product',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Save"
                iconName={
                  Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
                }
                onPress={submitFn}
              />
            </HeaderButtons>
        )
    }
}


const styles = StyleSheet.create({
    form: {
      margin: 20
    },
    formControl: {
      width: '100%'
    },
    label: {
      
      marginVertical: 8
    },
    input: {
      paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1
    }
  });

export default EditProductScreen;