import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const logoSrc = process.env.PUBLIC_URL + "/logo.jpg";

const LogIn = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "500vh" }}>
      {/* Top blank row */}
      <div style={{ background: "white", height: "calc(50vh - 250px)" }} />
      <div style={{ textAlign: "center" }}>
        <img src={logoSrc} alt="Logo" style={{ width: "100px", height: "100px" }} />
        <h1>Bughunter</h1>
      </div>

      {/* Main content row with blank columns */}
      <div style={{ display: "flex", height: "calc(50vh - 60px)" }}>
        {/* Left blank column */}
        <div style={{ background: "white", width: "calc(50vh )" }} />

        {/* Content columns */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "calc(100vw - 50vh)" }}>
          <div style={{ background: "teal", width: "50%", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1><b>Welcome!</b></h1>
            <form onSubmit={handleSubmit}>
              <label for="email">Email</label><p></p>
              <input type="email" name="email" placeholder="Email" />
              <p></p>
              <label for="password">Password</label><p></p>
              <input type="password" name="password" placeholder="Password" /><p></p>
              <button style={{ width: "100px", height: "50px", alignItems: "center" }} type="submit">Submit</button>
            </form>
            <p></p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default LogIn;
    
    // <>
      // <h1>Log In</h1>
      // <form onSubmit={handleSubmit}>
      //   <label for="email">Email</label><p></p>
      //   <input type="email" name="email" placeholder="Email" />
      //   <p></p>
      //   <label for="password">Password</label><p></p>
      //   <input type="password" name="password" placeholder="Password" /><p></p>
      //   <button type="submit">Submit</button>
      // </form>
    // </>
//   );
// };

// export default LogIn;
