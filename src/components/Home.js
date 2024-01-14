import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const logoSrc = process.env.PUBLIC_URL + "/logo.jpg";
  // return (
  //   <>
  //     <div>
  //       <img
  //         src={logoSrc}
  //         alt="Logo"
  //         style={{ width: "100px", height: "100px" }}
  //       />
  //     </div>
  //     <h1>Home</h1>
  //     {currentUser ? (
  //       <p>
  //         You are logged - <Link to="/dashboard">View Dashboard</Link>
  //       </p>
  //     ) : (
  //       <p>
  //         <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
  //       </p>
  //     )}
  //   </>
  // );
  return (
    <div className="home-container" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="home-content">
      <h1 className="home-title">Welcome</h1>
        <img
          src={logoSrc}
          alt="Logo"
          className="home-logo"
          style={{ width: "100px", height: "100px" }}
        />
        
        {currentUser ? (
          <p className="home-message">
            You are logged in - <Link to="/dashboard">View Dashboard</Link>
          </p>
        ) : (
          <div className="home-actions">
            <Link to="/login" className="home-button">Log In</Link>
            <Link to="/signup" className="home-button">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
