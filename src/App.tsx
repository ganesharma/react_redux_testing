import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route,Routes, BrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';


import FallbackRender from './components/errorBoundry';
import productStore from './store/reducers';

const Login = lazy(() => import('./components/Login/Login'));
const Product = lazy(() => import('./components/ProductSearch/Product'));


function App() {

return  (
<Provider store={productStore}>
<ErrorBoundary
  fallbackRender={FallbackRender}
  onReset={(details) => {
    // Reset the state of your app so the error doesn't happen again
  }}
>
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        
      <Route path='/' element={<Login />} /> 
      <Route path='/search-product' element={<Product />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
  </ErrorBoundary>
</Provider>);

}

export default App;
