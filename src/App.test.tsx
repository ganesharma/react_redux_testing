import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Rendering Of Element', () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
   
    expect(linkElement).toBeInTheDocument();
  });

  

});

describe('Form Testing ', () => { 

  test('Running my describe 2 Test 1 ', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
   
    expect(linkElement).toBeInTheDocument();
  });

 

});
