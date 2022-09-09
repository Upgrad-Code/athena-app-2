import React, { createContext, useReducer } from 'react';
import { iState, ProductPageReducer } from '../reducer/ProductPageReducer';

export const ProductPageContext = createContext(null);

export const ProductPageContextProvider = (props) => {
  const [state, dispatch] = useReducer(ProductPageReducer, iState);

  return (
    <ProductPageContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductPageContext.Provider>
  );
};
