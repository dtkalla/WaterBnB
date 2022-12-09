import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  const span = document.getElementsByClassName("close")[0];

  // span.onclick = function() {
  //   setShowModal(false);
  // }
  return (
    <>
      <div className='dropdown-menu-option' onClick={() => setShowModal(true)}><span>Sign Up</span></div>
      {showModal && (
        <>
        <Modal onClose={() => setShowModal(false)}>
          {/* <span class="close">&times;</span> */}
          <div className='login-header'>Sign Up!</div>
          <SignupForm />
          <br/>
        </Modal>
        </>
      )}
    </>
  );
}

export default SignupFormModal;
