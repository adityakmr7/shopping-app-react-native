import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

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
    }
    return state;
}