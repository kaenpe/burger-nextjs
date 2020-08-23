import styled from 'styled-components';
import Navbar from './Navbar';

const StyledCheckoutLayout = styled.main`
  height: 100vh;
  display: grid;
  grid-auto-rows: 50px auto;
`;
const CheckoutLayout = ({ children }) => {
  return (
    <>
      {' '}
      <StyledCheckoutLayout>
        <Navbar></Navbar>
        {children}
      </StyledCheckoutLayout>
    </>
  );
};

export default CheckoutLayout;
