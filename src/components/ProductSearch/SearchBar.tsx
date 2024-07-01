import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import searchProduct from '../../apiCalls/searchProduct';
import { pushResultQuery, setCurrProductSearch } from '../../store/productQueryReducer';
import { addToCompareBulk } from '../../store/cartReducer';
import { getasinData, getProductDetails } from '../../store/selector';


const SearchBar = () => {

  const textRef = useRef<HTMLInputElement>(null);
  
  const dispatch = useDispatch();
  const productResultStored = useSelector(getProductDetails);


  const asinLocalStorage = JSON.parse(localStorage.getItem('asin') || '[]') || [];

  const getCompareAsin = useSelector(getasinData);

 

  if(asinLocalStorage.length > 0 && asinLocalStorage.length !== getCompareAsin.length) {
    dispatch(addToCompareBulk({ asinData : asinLocalStorage }));
   }


  // if currentval is same to new val
  const callSearch = async () => {
   
    const currVal = textRef.current?.value.toLowerCase() || '';
    if (currVal && !productResultStored) {
     
      const prod = await searchProduct(currVal);
      dispatch(pushResultQuery({ query: currVal, queryResult: prod }));
    } else {
      dispatch(setCurrProductSearch({ query: currVal }))
    }
  }

  return (<>
    <div className="wrap">

      <input ref={textRef} type="text" placeholder="Search Product" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline searchbar' />

      <button className="searchButton" onClick={callSearch}>
        Search
      </button>

      <div className="compareButton" >
        View Compare - {getCompareAsin.length}
      </div>
    </div>

    <style>

      {`
        

        
.searchbar {
  width: 34%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  width: 100px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 18px;
  margin-left: 20px;
}

.compareButton {
  width: 250px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #fb0606ad;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 18px;
  margin-left: 20px;
}

.wrap{
  width: 30%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  display:flex;
  
}

    
    `}

    </style>

  </>)
}


export default SearchBar;