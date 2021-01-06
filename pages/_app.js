import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import Home from '../pages/index';
import '../styles/globals.css';
import Layout from '../components/UI/Layout';
import Navbar from '../components/UI/Navbar';
import IngredientsContextProvider from '../contexts/IngredientsContext';
import ModalContextProvider from '../contexts/ModalContext';
import theme from '../src/theme';
import AuthContextProvider, { AuthContext } from '../contexts/AuthContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const router = useRouter();
  const authContext = useContext(AuthContextProvider);
  const auth = authContext;
  let allowed = true;
  if (
    (router.pathname === '/contact' || router.pathname === '/checkout') &&
    !auth
  ) {
    allowed = false;
  }

  const ComponentToRender = allowed ? Component : Home;
  return (
    <>
      <Head>
        <title>Burger Builder</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no'
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AuthContextProvider>
          <ModalContextProvider>
            <IngredientsContextProvider>
              <Layout>
                <Navbar {...pageProps}></Navbar>
                <Component {...pageProps}></Component>
              </Layout>
            </IngredientsContextProvider>
          </ModalContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
