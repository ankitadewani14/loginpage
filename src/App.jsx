import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Routes>
      <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup setUser={setUser} />} />
    </Routes>
  );
};

export default App;
