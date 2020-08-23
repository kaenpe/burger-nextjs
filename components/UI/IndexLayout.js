import styled from 'styled-components';
import Navbar from './Navbar';
const StyledIndexLayout = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: 56px 1fr auto;
  z-index: 100;
`;
const IndexLayout = ({ children }) => {
  return (
    <StyledIndexLayout className='layout-wrapper'>
      <Navbar val={0}></Navbar>
      {children}
    </StyledIndexLayout>
  );
};

export default IndexLayout;
