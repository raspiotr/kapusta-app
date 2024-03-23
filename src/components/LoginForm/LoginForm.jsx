import { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./LoginForm.module.scss";
import google from "../../images/SVG/google.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      register
        ? email === "" || password === "" || name === ""
        : email === "" || password === ""
    ) {
      setIsEmpty(true);
      console.log("This is a required field");
    } else {
      console.log(
        register
          ? `Register: ${email} ${name} ${password}`
          : `Login: ${email} ${password}`
      );
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isEmpty && !email ? (
          <div className={scss.redAlert}>
            <p>This is a required field</p>
          </div>
        ) : null}
        {register && (
          <>
            <h5 className={scss.titles}>User name:</h5>
            <input
              className={scss.inputs}
              type="name"
              placeholder="User name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {isEmpty && !email ? (
              <div className={scss.redAlert}>
                <p>This is a required field</p>
              </div>
            ) : null}
          </>
        )}
        <h5 className={scss.titles}>Password:</h5>
        <input
          className={scss.inputs}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isEmpty && !email ? (
          <div className={scss.redAlert}>
            <p>This is a required field</p>
          </div>
        ) : null}
        <div className={scss.buttons}>
          <button type="submit">{register ? "SIGN UP " : "LOG IN"}</button>
          <button type="button" onClick={() => setRegister(!register)}>
            {register ? "LOGIN" : "REGISTRATION"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
