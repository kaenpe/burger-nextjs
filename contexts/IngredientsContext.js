import React, { createContext, useState } from 'react';
export const IngredientsContext = createContext();
export const IngredientsContextProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([
    { type: 'Meat', price: 1.3, quantity: 1 },
    { type: 'Cheese', price: 0.4, quantity: 0 },
    { type: 'Salad', price: 0.5, quantity: 0 },
    { type: 'Bacon', price: 0.7, quantity: 0 },
  ]);
  const value = { ingredients, setIngredients };
  return (
    <IngredientsContext.Provider value={value}>
      {children}
    </IngredientsContext.Provider>
  );
};
export default IngredientsContextProvider;
