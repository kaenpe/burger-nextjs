import { Button, Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { useContext } from 'react';
import Burger from '../Burger/Burger';
import { IngredientsContext } from '../../contexts/IngredientsContext';

const Checkout = () => {
  const { ingredientsOrder } = useContext(IngredientsContext);
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
      <Burger ing={ingredientsOrder} isIndex></Burger>

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
        <Link href='/contact/'>
          <Button
            style={{ minWidth: '120px', margin: '10px' }}
            variant='contained'
            color='primary'
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Checkout;
