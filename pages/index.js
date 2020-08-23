import Head from 'next/head';
import BurgerBuilder from '../components/Burger/BurgerBuilder';

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger </title>
      </Head>
      <BurgerBuilder></BurgerBuilder>
    </>
  );
}
