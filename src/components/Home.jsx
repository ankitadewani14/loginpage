import React from "react";
import Header from "./Header";

const Home = ({ user }) => {
  return (
    <>
    <Header/>
    <div className="form-container">
      <h2>Welcome, {user.username}!</h2>
    </div>
    </>
  );
};

export default Home;
