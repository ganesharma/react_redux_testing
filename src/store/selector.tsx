import { createSelector } from 'reselect';
import { RootState } from './reducers';
import cartReducer from './cartReducer';


const productListAll = (state : RootState) =>  state.productQueryReducer.productList;
const currProduct = (state : RootState) => state.productQueryReducer.currProductSearch;
const userData = (state : RootState) => state.loginReducer;
const asinData = (state : RootState) => state.cartReducer.asin;

export const getProductDetails = createSelector(
    [productListAll, currProduct],
    (productList, getCurrProductSearch) => {
      
        return productList[getCurrProductSearch];
  }
)

export const getUserData = createSelector(
  [userData],
  (userData) => userData
  
)

export const getasinData = createSelector(
  [asinData],
  (asin) => asin
  
)