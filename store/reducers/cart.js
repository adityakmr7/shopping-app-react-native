import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import { ADD_ORDER } from "../actions/order";

const initialState = {
    items: {},
    totalAmount: 0
}



export default(state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            let updatedOrNewProduct;
            if(state.items[addedProduct.id]) {
            //If product already present;
                updatedOrNewProduct = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
            }else {
                //new Products
                updatedOrNewProduct = new CartItem(
                    1, prodPrice, prodTitle, prodPrice
                )

            }
            return {
                ...state,
                items: {...state.items, [addedProduct.id]: updatedOrNewProduct},
                totalAmount: state.totalAmount + prodPrice
            }
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updateCartItems;
            if(currentQty > 1) {
                //first reduce the quantity if available
                const updateCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updateCartItems = {...state.items, [action.pid]: updateCartItem} 
            }else {
                updateCartItems = {...state.items};
                delete updateCartItems[action.pid];
            }
            return {
                ...state,
                items: updateCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            };
        //set back cart to initial statte after order is placed
        case ADD_ORDER:
            return initialState;
            
    }
    return state;
}