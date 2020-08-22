import { createContext, useState } from 'react';
export const ModalContext = createContext();
export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const value = { showModal, setShowModal };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
export default ModalContextProvider;
