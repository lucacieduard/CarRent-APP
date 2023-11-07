import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layout/Auth/AuthLayout";
import "./Login.scss";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div
        className="formContainer"
        
      >
        <div className="text">
          <p>Welcome Back</p>

          <p>Please sign in below!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            Login!
          </button>
          {error && (
            <span style={{ color: "red" }}>Wrong email or password!</span>
          )}
        </form>
        <span className="nAc">
          Dont have an account? <Link to={"/register"}>Sign Up</Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Login;
