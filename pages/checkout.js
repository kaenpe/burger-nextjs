import Head from 'next/head';
import Checkout from '../components/Checkout/Checkout';

const checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      <Checkout></Checkout>
    </>
  );
};

export default checkout;
