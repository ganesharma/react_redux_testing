import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { Product } from '../../types/productSearch';
import { addToCompare, removeFromCompare } from '../../store/cartReducer';
import { getProductDetails, getasinData } from '../../store/selector';



const ProductThumbnail = () => {

    const asinState = useSelector(getasinData);
    const dispatch = useDispatch();
 
    const productResultStored  = useSelector(getProductDetails) || [];
    

    useEffect(() => {
        localStorage.setItem('asin', JSON.stringify(asinState));
    }, [asinState]);
    
    const addToCompareProduct = (asin : string) => {
       
        localStorage.setItem('asin' , JSON.stringify([...asinState, asin]));
         dispatch(addToCompare({ asin }));
    }

    const removeFromCompareProduct = (asin : string) => {
       
        const updatedCompare = asinState.filter((val : string) => val !== asin);
    
        localStorage.setItem('asin' , JSON.stringify(updatedCompare));
        dispatch(removeFromCompare( { asinData : updatedCompare} ));
       
    }
   

    return (
        <>
            <div className="product-list">
                { productResultStored.length > 0 ? 
                <ul>
                    {
                       productResultStored.map((data: Product, i: number) => {
                            return (

                                <li className="product-item" key={i}>
                                    <img src={data.product_photo} alt={data.product_title}></img>
                                    <h2>{data.product_price}</h2>
                                    <p>{data.product_title}</p>
                                    { !asinState.includes(data.asin) ?
                                         <button className="add-to-cart" onClick={() => addToCompareProduct(data.asin)}>Add to Compare</button> 
                                    
                                    : 
                                    asinState.includes(data.asin) &&
                                         <button className="remove-from-cart" onClick={() => removeFromCompareProduct(data.asin)}>Remove</button> 
                                    }

                                </li>
                            );
                        })
                    }
                    </ul> 
                    : 
                     <div className='no-product'></div>      
                    }
            </div>

            <style>
                {
                    `
             .no-product {
                    color: red;
                    font-size:24;

             }       
            .product-list {
                max-width: 1200px;
                margin: 0 auto;
                padding: 100px 30px;
                
            }
            
            ul {
                list-style: none;
                padding: 0;
            }
            
            .product-item {
                background-color: #fff;
                margin-bottom: 20px;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                display: flex;
                align-items: center;
            }
            
            .product-item img {
                max-width: 150px;
                margin-right: 20px;
            }
            
            .product-item h2 {
                margin: 0 0 10px 0;
                font-size: 1.5em;
                color: #333;
            }
            
            .product-item p {
                margin: 0;
                color: #666;
                width: 40%;
                padding: 5%;
            }

            .add-to-cart {
                align-self: flex-start;
                padding: 10px 20px;
                background-color: #28a745;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1em;
                margin-top: 7%;
            }
            
            .add-to-cart:hover {
                background-color: #218838;
            }


             .remove-from-cart {
                align-self: flex-start;
                padding: 10px 20px;
                background-color: #be3b1b;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1em;
                margin-top: 7%;
            }
            
            .remove-from-cart:hover {
                background-color: #be3b1bb0;
            }

            `
                }
            </style>
        </>
    )
}

export default ProductThumbnail;