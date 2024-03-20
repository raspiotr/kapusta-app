import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  const handleLogin = (formData) => {
    console.log('Login data:', formData);
  };

  return (
    <div>
      <h1>Logowanie</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;

