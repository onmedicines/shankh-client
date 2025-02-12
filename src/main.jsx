import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import SignupForm from "./register/Register.jsx";
import { LoginData } from "./context/loginContext.js";
import Tickets from "./tickets/Tickets.jsx";
import LoginForm from "./login/Login.jsx";

const App = () => {
  const [data, setData] = useState({
    access: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/users/token/refresh", {
      withCredentials: true,
      credentials: "include",
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    });
  }, []);

  return (
    <LoginData.Provider value={[data, setData]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </LoginData.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
