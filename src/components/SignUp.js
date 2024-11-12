// src/components/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add authentication logic here if needed
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Your email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="newww">Sign In</button>
          </form>

          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Company name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Company email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm password" />
            </div>
            <button type="submit" className="newww">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
