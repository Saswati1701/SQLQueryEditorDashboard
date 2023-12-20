import React from 'react'
import { IoAdd } from "react-icons/io5";
import ModalComponent from './ModalComponent';
import { useState } from 'react';

const Button = ({icon, text}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    closeModal(); // Close the modal after submission
  };

  return (
    <div style={{border:"none"}}>
        <button className='button' title='Add Connection' onClick={openModal}>
            {icon}
        </button>
        <ModalComponent
        isOpen={modalIsOpen}
        closeModal={closeModal}
        onSubmit={handleSubmit}
      />
        <p>{text}</p>
    </div>
  )
}

export default Button