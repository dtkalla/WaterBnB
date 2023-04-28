import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import DemoLogin from '../DemoLogin';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <div className='dropdown-menu-option' onClick={() => setShowModal(true)}><span>Log In</span></div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='login-header'>Log In</div>
          <LoginForm />
          <DemoLogin />
          <br/>
          <br/>
          <br/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
