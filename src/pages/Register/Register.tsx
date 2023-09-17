import { Link } from "react-router-dom";
import AuthLayout from "../../layout/Auth/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <div className="formContainer">
        <div className="text">
          <p>
            Welcome to <span>MORENT</span>
          </p>
        </div>
        <form>
          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Last Name" />
          <input type="text" name="" id="" placeholder="Your Title" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <input type="password" name="" id="" placeholder="Confirm Password" />
          <label>Profile Picture </label>
          <input type="file" placeholder="Profile pic" />
          <button type="submit">Create Account</button>
        </form>
        <span className="nAc">
          Already registered? <Link to={"/login"}>Sign In</Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Register;
