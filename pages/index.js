import Head from 'next/head';
import BurgerBuilder from '../components/Burger/BurgerBuilder';
import Layout from '../components/UI/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger Builder</title>
      </Head>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </>
  );
}
