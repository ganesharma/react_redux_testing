import { configureStore } from "@reduxjs/toolkit";

import productQueryReducer from "./productQueryReducer";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";
const productStore = configureStore({
    reducer : { productQueryReducer, cartReducer, loginReducer },
    
});

export type RootState = ReturnType<typeof productStore.getState>;

export default productStore;