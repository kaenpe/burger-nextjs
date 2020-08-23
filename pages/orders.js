import React, { useEffect } from 'react';
import Burger from '../components/Burger/Burger';
import OrdersLayout from '../components/UI/OrdersLayout';
import { projectFirestore } from '../firebase/config';

const orders = ({ orders }) => {
  useEffect(() => {
    console.log(orders);
  }, []);

  return (
    <OrdersLayout>
      {orders.map((ing) => {
        return <Burger ing={ing.ingredients}></Burger>;
      })}
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
