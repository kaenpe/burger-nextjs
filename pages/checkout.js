import Head from 'next/head';
import Checkout from '../components/Checkout/Checkout';
import CheckoutLayout from '../components/UI/CheckoutLayout';

const checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <CheckoutLayout>
        <Checkout></Checkout>
      </CheckoutLayout>
    </>
  );
};

export default checkout;
