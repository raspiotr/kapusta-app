import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default Login;
