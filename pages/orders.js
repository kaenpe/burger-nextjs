import React, { useContext } from 'react';
import Orders from '../components/Orders/Orders';
import { AuthContext } from '../contexts/AuthContext';
import { projectFirestore } from '../firebase/config';

const orders = ({ orders }) => {
  const { auth } = useContext(AuthContext);
  return <Orders orders={orders}></Orders>;
};
export const getStaticProps = async () => {
  const orders = [];
  await projectFirestore
    .collection('orders')
    .orderBy('createdAt', 'desc')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        orders.push({
          ...doc.data(),
          id: doc.id,
          createdAt: new Date(
            doc.data().createdAt.seconds * 1000
          ).toLocaleDateString('en-gb'),
        });
      });
    });

  return {
    revalidate: 1,
    props: {
      orders,
    },
  };
};
export default orders;
