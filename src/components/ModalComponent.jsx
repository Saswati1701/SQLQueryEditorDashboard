import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

Modal.setAppElement('#root');

const LabelInput = ({label, type, name, value, inputChange}) =>{
  return(
    <>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={inputChange} required />
      <br/>
    </>
  )

}

const ModalComponent = ({ isOpen, closeModal, onSubmit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    connectionName: '',
    hostname: '',
    port: '',
    userName: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Pass the form data to the onSubmit function
    // onSubmit(formData);
    e.preventDefault()
    dispatch({
      type: "ADD_CONNECTION",
      payload: {
        name: formData.connectionName,
        details: {
          hostname: formData.hostname,
          port: formData.port,
          userName: formData.userName,
          password: formData.password
        }
      }
    })
    setFormData({
      connectionName: '',
      hostname: '',
      port: '',
      userName: '',
      password: '',
    })
    closeModal();
  };
  const customModalStyle = {
    content: {
      width: '60%', // 40% smaller width
      height: '60%', // 40% smaller height
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Connection Modal"
      style={customModalStyle}>
      <div>
        <LabelInput label="Connection name" type="text" name="connectionName" value={formData.connectionName} inputChange={handleInputChange}/>
        <LabelInput label="Host name" type="text" name="hostname" value={formData.hostname} inputChange={handleInputChange}/>
        <LabelInput label="Port" type="text" name="port" value={formData.port} inputChange={handleInputChange}/>
        <LabelInput label="Username" type="text" name="userName" value={formData.userName} inputChange={handleInputChange}/>
        <LabelInput label="Password" type="password" name="password" value={formData.password} inputChange={handleInputChange}/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </Modal>
  )
};

export default ModalComponent;
