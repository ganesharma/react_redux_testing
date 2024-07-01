import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import productStore from '../store/reducers';
import Login from '../components/Login/Login';



describe('Home Page Testing', () => {

    it('Home Page render test', async () => {
        render(<Provider store={productStore}><BrowserRouter><Login></Login></BrowserRouter></Provider>);
        const textBox : HTMLElement = await screen.findByRole('textbox');
        expect(textBox).toBeInTheDocument();

        const button : HTMLElement = await screen.findByRole('button');
        expect(button).toBeInTheDocument();
    });
});

