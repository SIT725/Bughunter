import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth.js";

const Home = () => {
  const { currentUser } = useAuth();
  const logoSrc = process.env.PUBLIC_URL + "/logo.jpg";
  return (
    <>
      <div className="home-content">
        <div>
          <img
            src={logoSrc}
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <h1>Home</h1>
        {currentUser ? (
          <p>
            You are logged - <Link to="/dashboard">View Dashboard</Link>
          </p>
        ) : (
          <p>
            <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
