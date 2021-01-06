import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Contact from '../components/Contact/Contact';
import { OrderContext } from '../contexts/OrderContext';
//styled

//
const contact = () => {
  const router = useRouter();
  const { order } = useContext(OrderContext);
  useEffect(() => {
    order === false ? router.replace('/') : null;
  }, []);
  return (
    <>
      {' '}
      <Head>
        <title>Contact</title>
      </Head>
      {order && <Contact></Contact>}
    </>
  );
};

export default contact;
