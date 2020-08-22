import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
const StyledLayout = styled.main`
  height: 100vh;
  display: grid;
  grid-auto-rows: 56px 1fr auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'header header header' 'burger burger burger' 'controls controls controls';
  z-index: 100;
`;
const Layout = ({ children }) => {
  return (
    <StyledLayout className='layout-wrapper'>
      <Navbar></Navbar>

      {children}
    </StyledLayout>
  );
};

export default Layout;
