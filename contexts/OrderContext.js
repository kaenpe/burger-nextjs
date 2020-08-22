import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';

export const OrderContext = createContext();
export const OrderContextProvider = ({ children }) => {
  const [ingredientsOrder, setIngredientsOrder] = useState([
    { type: 'Meat', id: uuid() },
  ]);
  const value = { ingredientsOrder, setIngredientsOrder };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
export default OrderContextProvider;
