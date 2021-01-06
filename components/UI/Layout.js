import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { OrderContext } from '../../contexts/OrderContext';
const StyledLayout = styled.main`
  height: ${({ path }) =>
    path === '/checkout' || path === '/' ? '100vh' : 'auto'};
  display: grid;
  grid-template-rows: ${({ path }) =>
    path === '/' ? '56px 1fr auto' : path === '/contact' ? '56px 1fr' : null};
  z-index: 100;
  grid-auto-rows: ${({ path }) => (path === '/checkout' ? '50px auto' : null)};
  @media (min-width: 600px) {
    grid-template-columns: ${({ path }) =>
      path === '/orders' ? 'repeat(2,1fr)' : null};
  }
  @media (min-width: 900px) {
    grid-template-columns: ${({ path }) =>
      path === '/orders' ? 'repeat(4,1fr)' : null};
  }
`;
const Layout = ({ children }) => {
  const { setOrder } = useContext(OrderContext);
  const router = useRouter();
  useEffect(() => {
    router.pathname === ('/contact' || '/checkout') ? null : setOrder(false);
  }, []);

  return (
    <StyledLayout path={router.pathname} className='layout-wrapper'>
      {/* <Navbar></Navbar> */}
      {children}
    </StyledLayout>
  );
};

export default Layout;
