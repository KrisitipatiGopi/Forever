import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import productsReducer from "./productsSLice";
import cartReducer from "./cartSLice"

const appStore = configureStore({
    reducer:{
        search: searchReducer,
        products: productsReducer,
        cart:cartReducer,
    }
});
export default appStore;