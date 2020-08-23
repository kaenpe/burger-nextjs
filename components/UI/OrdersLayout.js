import styled from 'styled-components';
import Navbar from './Navbar';
const StyledOrderLayout = styled.main`
  display: grid;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const IndexLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <StyledOrderLayout className='layout-wrapper'>
        {children}
      </StyledOrderLayout>
    </>
  );
};

export default IndexLayout;
