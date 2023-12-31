import { Link, useLocation } from "react-router-dom";
import AuthLayout from "../../layout/Auth/AuthLayout";
import "./Login.scss";
import { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/authContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const path = useLocation();
  const user = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (path.search.includes("redirect=true") || path.search.includes("car")) {
      setEmail("test@test.com");
      setPassword("testtest");
    }
  }, []);

  return (
    <AuthLayout>
      <div className="formContainer">
        <div className="text">
          <p>Welcome Back</p>

          <p>Please sign in below!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            disabled={loading || user.user?.email ? true : false}
          >
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
