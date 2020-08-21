import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 99;
  position: fixed;
  opacity: 0.2;
  left: 0;
  top: 0;
`;

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: #eee;
  width: 30%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #00000050;
  padding: 16px;
  left: 35%;
  top: 20%;

  @media (max-width: 800px) {
    width: 70%;
    left: 15%;
  }
`;
const Modal = ({ children }) => {
  const { showModal, setShowModal } = useContext(ModalContext);
  return (
    <>
      {showModal && (
        <>
          <StyledBackdrop
            onClick={() => setShowModal((prevState) => !prevState)}
          ></StyledBackdrop>
          <StyledModal>{children}</StyledModal>
        </>
      )}
    </>
  );
};

export default Modal;
