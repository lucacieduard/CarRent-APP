import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cars from "./pages/Cars/Cars";
import CarPage from "./pages/Car/CarPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cars">
          <Route index element={<Cars />} />
          <Route path=":id" element={<CarPage />} />
        </Route>
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
