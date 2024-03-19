// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="container">
      <header>
        <img src="logo.png" alt="Logo aplikacji" />
      </header>
      <main>
        <div className="login-form">
          <div className="google-login">
            <p>You can log in with your Google Account</p>
            <button className="google-button">
              <img src="google_logo.png" alt="Google Logo" />
              Log in with Google
            </button>
          </div>
          <h2>Email</h2>
          <input type="email" placeholder="your@email.com" />
          <h2>Password</h2>
          <input type="password" placeholder="Enter your password" />
          <div className="buttons">
            <button className="login-button">LOG IN</button>
            <button className="register-button">REGISTRATION</button>
          </div>
        </div>
      </main>
    </div>
  );
}
  

export default LoginForm