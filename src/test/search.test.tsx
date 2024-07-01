import { findAllByRole, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import React from 'react';

import SearchBar from '../components/ProductSearch/SearchBar';
import productStore from '../store/reducers';
import Header from '../components/Header';
import ProductThumbnail from '../components/ProductSearch/ProductList';




describe('Testing Search Integration Testing', () => {

   const renderComponent = () => {
        const { getByRole } =  render(<Provider store={productStore}>
        <BrowserRouter>
            <Header></Header>
            <SearchBar></SearchBar>
            <ProductThumbnail></ProductThumbnail>
        </BrowserRouter>
        </Provider>);
        const textBox =  getByRole('textbox');
        const button =  getByRole('button');

        return { textBox, button };
   }
   
   

    it('Testing Search Bar', () => {
       
        const { textBox, button } = renderComponent();
    
        expect(textBox).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(textBox).toHaveAttribute("placeholder", "Search Product");
        expect(button).toHaveAttribute("class", "searchButton");     
    });

    it('Testing Product Search Click', async () => {
       
        const { textBox, button } = renderComponent();
    
       // const user = userEvent.setup();
      
        userEvent.type(textBox, 'Phone');

        userEvent.click(button);
      
        expect(textBox).toHaveValue("Phone");

       const productItem =  await screen.findAllByRole('listitem');


        productItem.forEach((el : HTMLElement) => {
            const imgElement = el.childNodes[0];
            const priceElement = el.childNodes[1];
            const description = el.childNodes[2];
            const button = el.childNodes[3];
        
            expect(imgElement).not.toHaveAttribute("src", "");
            expect(priceElement).toBeInTheDocument();
            expect(description).toBeInTheDocument();
            expect(button).toBeInTheDocument();
        });
      
    });

})