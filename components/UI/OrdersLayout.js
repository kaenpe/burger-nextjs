import styled from 'styled-components';
import Navbar from './Navbar';
const StyledOrderLayout = styled.main`
  display: grid;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  padding: 5%;
  grid-gap: 3%;

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
      <StyledOrderLayout className='layout-wrapper'>
        <Navbar></Navbar>
        {children}
      </StyledOrderLayout>
    </>
  );
};

export default IndexLayout;
