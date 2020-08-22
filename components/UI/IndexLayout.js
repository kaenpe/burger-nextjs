import styled from 'styled-components';
import Navbar from './Navbar';
const StyledIndexLayout = styled.main`
  height: 100vh;
  display: grid;
  grid-auto-rows: 56px 1fr auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'header header header' 'burger burger burger' 'controls controls controls';
  z-index: 100;
`;
const IndexLayout = ({ children }) => {
  return (
    <StyledIndexLayout className='layout-wrapper'>
      <Navbar></Navbar>
      {children}
    </StyledIndexLayout>
  );
};

export default IndexLayout;
