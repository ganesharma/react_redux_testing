import { createSlice } from "@reduxjs/toolkit";
import { ProductIntialVal } from '../types/productSearch';


const initialState : ProductIntialVal = {
    productList : {},
    currProductSearch : 'Phone'
};

const productSlice = createSlice({
 name : 'productList',
 initialState,
 reducers : {
    pushResultQuery : (state, action) => {
        const query = action.payload.query;
        const queryResult  = action.payload.queryResult;
        state.currProductSearch = query;
        state.productList[query] = queryResult;
     
    },

    setCurrProductSearch : (state, action) => {
        const query = action.payload.query;
        state.currProductSearch = query;
    }


 }
});

export const { pushResultQuery, setCurrProductSearch } = productSlice.actions;

export default productSlice.reducer;