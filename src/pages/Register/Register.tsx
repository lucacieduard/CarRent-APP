import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layout/Auth/AuthLayout";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

type Form = {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  password?: string;
  rpassword?: string;
  fileURL?: string;
};

const Register = () => {
  const [formData, setFormData] = useState({} as Form);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const file = fileRef.current?.files;
    try {
      if (formData.password) {
        if (file && file.length !== 0) {
          const storageRef = ref(storage, `ProfilePics/${formData.email}`);
          const uploadTask = await uploadBytesResumable(storageRef, file[0]);
          if (uploadTask.state === "success") {
            const downloadURL = await getDownloadURL(uploadTask.ref);
            const res = await createUserWithEmailAndPassword(
              auth,
              formData.email,
              formData.password
            );
            delete formData.password;
            delete formData.rpassword;
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              fileURL: downloadURL,
              favoriteCars: [],
              ...formData,
            });
          }
        } else {
          const res = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          delete formData.password;
          delete formData.rpassword;
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            favoriteCars: [],
            ...formData,
          });
        }
      }
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <AuthLayout>
      <div className="formContainer">
        <div className="text">
          <p>
            Welcome to <span>MORENT</span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Your Title"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
            minLength={7}
          />
          <input
            type="password"
            name="rpassword"
            id="rpassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            minLength={7}
          />
          <label>Profile Picture </label>
          <input
            type="file"
            placeholder="Profile pic"
            id="profilePic"
            ref={fileRef}
          />
          <button type="submit" disabled={loading}>
            Create Account
          </button>
          {error && <span>Something went wrong!</span>}
        </form>
        <span className="nAc">
          Already registered? <Link to={"/login"}>Sign In</Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Register;
