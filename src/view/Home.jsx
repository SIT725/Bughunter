import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../controller/Auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const logoSrc = process.env.PUBLIC_URL + "/logo.jpg";
  return (
    <>
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
    </>
  );
};

export default Home;