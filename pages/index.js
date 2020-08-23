import Head from 'next/head';
import BurgerBuilder from '../components/Burger/BurgerBuilder';
import IndexLayout from '../components/UI/IndexLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger </title>
      </Head>
      <IndexLayout>
        <BurgerBuilder></BurgerBuilder>
      </IndexLayout>
    </>
  );
}
