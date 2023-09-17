import { Link } from "react-router-dom";
import AuthLayout from "../../layout/Auth/AuthLayout";
import "./Login.scss";

const Login = () => {
  return (
    <AuthLayout>
      <div className="formContainer">
        <div className="text">
          <p>Welcome Back</p>

          <p>Please sign in below!</p>
        </div>
        <form>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button type="submit">Login!</button>
        </form>
        <span className="nAc">
          Dont have an account? <Link to={"/register"}>Sign Up</Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Login;
