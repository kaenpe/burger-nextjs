import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/UI/Layout';
import Navbar from '../components/UI/Navbar';
import IngredientsContextProvider from '../contexts/IngredientsContext';
import ModalContextProvider from '../contexts/ModalContext';
import theme from '../src/theme';
import AuthContextProvider from '../contexts/AuthContext';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Burger Builder</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
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
  }
}

export default MyApp;
