import React, { createContext, useState } from 'react';
export const OrderContext = createContext();
export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(false);
  const value = { order, setOrder };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
export default OrderContextProvider;
