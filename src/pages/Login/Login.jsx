import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  return (
    <Container>
      <LoginForm onLogin={handleLogin} />
    </Container>
  );
};

export default Login;
