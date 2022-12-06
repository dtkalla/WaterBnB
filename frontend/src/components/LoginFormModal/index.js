import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import DemoLogin from '../DemoLogin';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <span onClick={() => setShowModal(true)}>Log In<i className='box'>hfcvnhjvbfh</i></span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='login-header'>Log In</div>
          <LoginForm />
          <DemoLogin />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
