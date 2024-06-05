import { useState } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleOpen = () => {
    console.log('handleOpen');
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpen,
    handleClose
  };
};

export default useModal;

