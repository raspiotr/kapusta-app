import LoginForm from "../../components/LoginForm/LoginForm";
import scss from "./Login.module.scss";
import bigLogo from "../../images/PNG/big_logo.png";

const Login = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  return (
    <div className={scss.container}>
      <div className={scss.logo}>
        <img src={bigLogo} alt="kapusta logo" />
      </div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
