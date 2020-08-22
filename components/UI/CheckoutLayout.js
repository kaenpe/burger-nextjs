import styled from 'styled-components';
import Navbar from './Navbar';

const StyledCheckoutLayout = styled.main``;
const CheckoutLayout = ({ children }) => {
  return (
    <StyledCheckoutLayout>
      <Navbar></Navbar>
      {children}
    </StyledCheckoutLayout>
  );
};

export default CheckoutLayout;
