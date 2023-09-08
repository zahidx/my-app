import React, { useState } from 'react';
import '../Signin.css'; // Import the CSS file

const SignInModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="signin-modal">
      <button className="open-modal-button" onClick={toggleModal}>
        Sign In
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-modal-button" onClick={toggleModal}>
              &times;
            </span>
            {!showSignUp && !showForgotPassword ? (
              <>
                <h2>Sign In</h2>
                <form>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" />

                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />

                  <button type="submit">Sign In</button>
                </form>
                <p>
                  <span className="option-link" onClick={toggleSignUp}>
                    Sign Up
                  </span>
                  <span className="option-link" onClick={toggleForgotPassword}>
                    Forgot Password
                  </span>
                </p>
              </>
            ) : showSignUp ? (
              <>
                <h2>Sign Up</h2>
                <form>
                  {/* Sign-up form fields */}
                  <button type="submit">Sign Up</button>
                </form>
                <p>
                  <span className="option-link" onClick={toggleModal}>
                    Back to Sign In
                  </span>
                </p>
              </>
            ) : (
              <>
                <h2>Forgot Password</h2>
                <form>
                  {/* Forgot password form fields */}
                  <button type="submit">Reset Password</button>
                </form>
                <p>
                  <span className="option-link" onClick={toggleModal}>
                    Back to Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInModal;
