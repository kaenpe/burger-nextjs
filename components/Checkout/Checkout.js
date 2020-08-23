import { Button, Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { useContext } from 'react';
import { IngredientsContext } from '../../contexts/IngredientsContext';
import Burger from '../Burger/Burger';
import { useFirestore } from '../hooks/useFirestore';

const Checkout = () => {
  const { ingredientsOrder, ingredients } = useContext(IngredientsContext);
  const order = () => {
    const ingredientsList = {
      list: ingredientsOrder.map((ing) => {
        return { type: ing.type, id: ing.id };
      }),
      price: ingredients.reduce((acc, ing) => {
        return acc + ing.quantity * ing.price;
      }, 0),
    };
    useFirestore('orders', ingredientsList);
  };
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        gridRow: '2',
      }}
    >
      <Burger ing={ingredientsOrder}></Burger>

      <Container style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant={'h3'} align='center' color='primary' gutterBottom>
          Enjoy your meal!
        </Typography>
        <Link href='/'>
          <Button
            style={{ minWidth: '120px', margin: '10px' }}
            variant='contained'
            color='secondary'
          >
            {' '}
            Cancel
          </Button>
        </Link>
        <Link href='/orders/'>
          <Button
            style={{ minWidth: '120px', margin: '10px' }}
            variant='contained'
            color='primary'
            onClick={() => order()}
          >
            {' '}
            Continue
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Checkout;
