import { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./LoginForm.module.scss";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <main>
      <div className={scss.container}>
        <form className={scss.form} onSubmit={handleSubmit}>
          <div className="google-login">
            <p>You can log in with your Google Account</p>
            <Link
              to={
                "https://kapusta-backend-827563b0830f.herokuapp.com/api/auth/google"
              }
              className="google-button"
            >
              <img src="google_logo.png" alt="Google Logo" />
              Log in with Google
            </Link>
          </div>
          <h2>Email</h2>
          <input type="email" placeholder="your@email.com" />
          <h2>Password</h2>
          <input type="password" placeholder="Enter your password" />
          <div className="buttons">
            <button className="login-button">LOG IN</button>
            <button className="register-button">REGISTRATION</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
