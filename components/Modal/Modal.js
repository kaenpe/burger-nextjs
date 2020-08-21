import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 101;
  position: fixed;
  opacity: 0.2;
`;
const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <Backdrop
          onClick={() => setShowModal((prevState) => !prevState)}
        ></Backdrop>
      )}
    </>
  );
};
export const getStaticProps = async () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  return {
    props: { showModal, setShowModal }, // will be passed to the page component as props
  };
};
export default Modal;
