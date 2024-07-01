import { createSlice } from "@reduxjs/toolkit";
import { CompareProductReducer } from "../types/productSearch";

// import { produce } from "immer";

const cartIntialVal : CompareProductReducer = {
    asin : [] 
};


const cartSlice = createSlice({
    name : 'cart',
    initialState : cartIntialVal,
    reducers : {
        addToCompare : (state, action) => {
            const productId : string = action.payload.asin;
            const existingProductIds = state.asin;
         
            if(productId != '' && !existingProductIds.includes(productId)) {
               
                state.asin = [...existingProductIds, productId];
            }
          
        },
        removeFromCompare : (state, action) => {
           const asinData : string[] = action.payload.asinData;
           
           state.asin = asinData || [];
           
        },

        addToCompareBulk : (state, action) => {
            const asinData : string[] = action.payload.asinData;
            const uniqueData = asinData.filter((val, index) => asinData.indexOf(val) === index);
           
            state.asin = [...uniqueData];
           
        }


    }
});

export const { addToCompare, removeFromCompare, addToCompareBulk} = cartSlice.actions;

export default cartSlice.reducer;