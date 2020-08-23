import React from 'react';
import Orders from '../components/Orders/Orders';
import OrdersLayout from '../components/UI/OrdersLayout';
import { projectFirestore } from '../firebase/config';

const orders = ({ orders }) => {
  return (
    <OrdersLayout>
      <Orders orders={orders}></Orders>
    </OrdersLayout>
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
