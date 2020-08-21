import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
const LayoutWrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: 56px 1fr auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'header header header' 'burger burger burger' 'controls controls controls';
  z-index: 100;
`;
const Layout = ({ children }) => {
  return (
    <LayoutWrapper className='layout-wrapper'>
      <Navbar></Navbar>

      {children}
      <Footer></Footer>
    </LayoutWrapper>
  );
};

export default Layout;
