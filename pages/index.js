import Head from 'next/head';
import BurgerBuilder from '../components/Burger/BurgerBuilder';
import IndexLayout from '../components/UI/IndexLayout';
import Navbar from '../components/UI/Navbar';

export default function Home({ orders }) {
  return (
    <>
      <Head>
        <title>Burger </title>
      </Head>
      <Navbar></Navbar>
      <IndexLayout>
        <BurgerBuilder orders={orders}></BurgerBuilder>
      </IndexLayout>
    </>
  );
}
// export const getStaticProps = async () => {
//   const orders = 'dog';
//   await db
//     .collection('orders')
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         return { ...doc.data() };
//       });
//     });

//   return {
//     props: {
//       orders,
//     },
//   };
// };
