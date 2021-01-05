import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BurgerBuilder from '../components/Burger/BurgerBuilder';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, []);
  return (
    <>
      <Head>
        <title>Burger </title>
      </Head>
      <BurgerBuilder></BurgerBuilder>
    </>
  );
}
