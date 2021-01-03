import { useRouter } from 'next/router';
import styled from 'styled-components';
const StyledLayout = styled.main`
  height: ${({ path }) =>
    path === '/checkout' || path === '/' ? '100vh' : 'auto'};
  display: grid;
  grid-template-rows: ${({ path }) =>
    path === '/' ? '56px 1fr auto' : path === '/contact' ? '56px 1fr' : null};
  z-index: 100;
  grid-gap: ${({ path }) => (path === '/orders' ? '5%' : null)};
  padding: ${({ path }) => (path === '/orders' ? '3%' : null)};
  align-items: ${({ path }) => (path === '/orders' ? 'center' : null)};
  justify-content: ${({ path }) => (path === '/orders' ? 'center' : null)};
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
  const router = useRouter();
  return (
    <StyledLayout path={router.pathname} className='layout-wrapper'>
      {/* <Navbar></Navbar> */}
      {children}
    </StyledLayout>
  );
};

export default Layout;
