import React from 'react';
import Burger from '../Burger/Burger';

const Orders = ({ orders }) => {
  return (
    <>
      {orders.map((ing) => {
        return <Burger ing={ing.ingredients}></Burger>;
      })}
    </>
  );
};

export default Orders;
