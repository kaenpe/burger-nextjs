import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Checkout from '../components/Checkout/Checkout';
import { OrderContext } from '../contexts/OrderContext';

const checkout = () => {
  const router = useRouter();
  const { order } = useContext(OrderContext);
  useEffect(() => {
    order === false ? router.replace('/') : null;
  }, []);
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      {order && <Checkout></Checkout>}
    </>
  );
};

export default checkout;
