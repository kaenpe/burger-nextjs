import { Container, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import CheckoutLayout from '../components/UI/CheckoutLayout';
import { projectFirestore } from '../firebase/config';

const orders = ({ orders }) => {
  useEffect(() => {
    console.log(orders);
  }, []);

  return (
    <CheckoutLayout>
      <Container style={{ gridRow: '2' }}>
        {orders.map((ing) => (
          <Typography variant='h3'>
            {ing.ingredients.map} {ing.price}
          </Typography>
        ))}
      </Container>
    </CheckoutLayout>
  );
};
export const getStaticProps = async () => {
  const orders = [];
  await projectFirestore
    .collection('orders')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        orders.push({ ...doc.data() });
      });
    });

  return {
    props: {
      orders,
    },
  };
};
export default orders;
