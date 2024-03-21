import { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./LoginForm.module.scss";
import google from "../../images/SVG/google.svg";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div>
      <form className={scss.form} onSubmit={handleSubmit}>
        <p className={scss.firstText}>
          You can log in with your Google Account
        </p>
        <div className={scss.googleLogin}>
          <Link
            to={
              "https://kapusta-backend-827563b0830f.herokuapp.com/api/auth/google"
            }
          >
            <img src={google} alt="" />
            <span>Google</span>
          </Link>
        </div>
        <p>Or log in using an email and password, after registering:</p>
        <h5 className={scss.titles}>Email:</h5>
        <input
          className={scss.inputs}
          type="email"
          placeholder="your@email.com"
        />
        <h5 className={scss.titles}>Password:</h5>
        <input className={scss.inputs} type="password" placeholder="Password" />
        <div className={scss.buttons}>
          <button>LOG IN</button>
          <button>REGISTRATION</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
