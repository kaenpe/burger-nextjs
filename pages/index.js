import Head from 'next/head';
import BurgerBuilder from '../components/Burger/BurgerBuilder';
import IndexLayout from '../components/UI/IndexLayout';
import Navbar from '../components/UI/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger </title>
      </Head>
      <Navbar></Navbar>
      <IndexLayout>
        <BurgerBuilder></BurgerBuilder>
      </IndexLayout>
    </>
  );
}
