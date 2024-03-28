import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, login } from "../../redux/auth/operations";

import { Link } from "react-router-dom";
import scss from "./LoginForm.module.scss";
import google from "../../images/SVG/google.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [registerAction, setRegisterAction] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      registerAction
        ? email === "" || password === "" || name === ""
        : email === "" || password === ""
    ) {
      return setIsEmpty(true);
    }

    const form = event.currentTarget;
    if (registerAction) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    } else {
      dispatch(
        login({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }
    setName("");
    setEmail("");
    setPassword("");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <form className={scss.form} onSubmit={handleSubmit} autoComplete="off">
        <p className={scss.firstText}>
          You can log in with your Google Account
        </p>
        <div className={scss.googleLogin}>
          <Link
            to={
              "https://kapusta-app-eafad5d610ef.herokuapp.com/api/auth/google"
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
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isEmpty && !email ? (
          <div className={scss.redAlert}>
            <p>This is a required field</p>
          </div>
        ) : null}
        {registerAction && (
          <>
            <h5 className={scss.titles}>User name:</h5>
            <input
              className={scss.inputs}
              type="text"
              name="name"
              placeholder="User name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {isEmpty && !name ? (
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
          minLength="6"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isEmpty && !password ? (
          <div className={scss.redAlert}>
            <p>This is a required field</p>
          </div>
        ) : null}
        <div className={scss.buttons}>
          <button type="submit">
            {registerAction ? "SIGN UP " : "LOG IN"}
          </button>
          <button
            type="button"
            onClick={() => setRegisterAction(!registerAction)}
          >
            {registerAction ? "LOGIN" : "REGISTRATION"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
