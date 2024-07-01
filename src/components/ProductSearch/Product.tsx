
import React from 'react'

import SearchBar from './SearchBar'
import ProductThumbnail from './ProductList'
import Header from '../Header'

function Product() {

  return (<>
    <Header></Header>
    <SearchBar></SearchBar>
    <ProductThumbnail></ProductThumbnail>
    </>
  )
}

export default Product
