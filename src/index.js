import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductPageContextProvider } from './context/ProductPageContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ProductPageContextProvider>
        <App />
      </ProductPageContextProvider>
    </BrowserRouter>
  </StrictMode>
);
