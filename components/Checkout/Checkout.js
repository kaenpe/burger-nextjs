import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import Burger from '../Burger/Burger';

const Checkout = () => {
  const { ingredientsOrder } = useContext(OrderContext);
  return (
    <Container>
      <Burger ing={ingredientsOrder}></Burger>
    </Container>
  );
};

export default Checkout;
