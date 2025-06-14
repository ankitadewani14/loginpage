import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth";
import Header from "./Header";

const Signup = ({ setUser }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await signupUser(fullName, email, password); 
      
      setUser(user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h2>Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </>
  );
};

export default Signup;
