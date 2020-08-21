import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
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
      <Modal></Modal>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
