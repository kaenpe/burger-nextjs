import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 99;
  position: fixed;
  opacity: 0.4;
  left: 0;
  top: 0;
`;

const StyledModal = styled(motion.div)`
  position: fixed;
  z-index: 500;
  background-color: #eee;
  width: 25%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #00000050;
  padding: 16px;
  left: 37.5%;
  top: 20%;

  @media (max-width: 800px) {
    width: 80%;
    left: 10%;
  }
`;

const Modal = ({ children }) => {
  const variants = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const { showModal, setShowModal } = useContext(ModalContext);
  return (
    <>
      {showModal && (
        <>
          <StyledBackdrop
            onClick={() => setShowModal((prevState) => !prevState)}
          ></StyledBackdrop>
        </>
      )}

      <StyledModal
        variants={variants}
        initial={'hidden'}
        transition={{ duration: 1 }}
        animate={showModal ? 'visible' : 'hidden'}
      >
        {children}
      </StyledModal>
    </>
  );
};

export default Modal;
