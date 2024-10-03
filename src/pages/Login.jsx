import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userName = useField("text");
  const password = useField("password");

  const { login, error } = useLogin("/api/users/login");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login({
      username: userName.value,
      password: password.value,
    });
    if (!error) {
      console.log("success");
      navigate("/");
    }
  };
  return (
    <div className="login-container">
      <h2>Log in</h2>
      {error !== 0 && <div>{error}</div>}
      <form onSubmit={handleFormSubmit}>
        <label>User Name:</label>
        <input {...userName} />
        <label>Password:</label>
        <input {...password} />
        <button>Log in</button>
      </form>
    </div>
  );
};
export default Login;
