import React from 'react';
import uuid from 'react-uuid';
import Burger from '../Burger/Burger';
const Orders = ({ orders }) => {
  return (
    <>
      {orders.map((ing) => {
        return <Burger ing={ing.ingredients} key={uuid()}></Burger>;
      })}
    </>
  );
};

export default Orders;
