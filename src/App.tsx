import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cars from "./pages/Cars/Cars";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
