import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const logoSrc = process.env.PUBLIC_URL + "/logo.jpg";
  
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "500vh" }}>
      {/* Top blank row */}
      <div style={{ background: "white", height: "calc(50vh - 60px)" }} />
      <div style={{ textAlign: "center" }}>
        <img src={logoSrc} alt="Logo" style={{ width: "100px", height: "100px" }} />
        <h1>Bughunter</h1>
      </div>

      {/* Main content row with blank columns */}
      <div style={{ display: "flex", height: "calc(50vh - 60px)" }}>
        {/* Left blank column */}
        <div style={{ background: "white", width: "calc(50vh - 60px)" }} />

        {/* Content columns */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "calc(100vw - 50vh)" }}>
          <div style={{ background: "teal", width: "50%", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1><b>Welcome!</b></h1>
            <h2>Already have an account?</h2>
            <p></p>
            {currentUser ? (
              <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
            ) : (
              <><button style={{ width: "200px", height: "50px",  }}><Link to="/login">Log In</Link></button></>
            )}
          </div>
          <div style={{ background: "silver", width: "50%", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1><b>Welcome!</b></h1>
            <h2>Don't have an account?</h2>
            <p></p>
            <><button style={{ width: "200px", height: "50px",  }}><Link to="/signup">Sign Up</Link></button></>
          </div>
        </div>

        {/* Right blank column */}
        <div style={{ background: "white", width: "calc(50vh - 60px)" }} />
      </div>

      {/* Bottom blank row */}
      <div style={{ background: "white", height: "calc(50vh - 60px)" }} />
    </div>
  );
};

export default Home;

//   return (
//     <>
//       <div>
//         <img
//           src={logoSrc}
//           alt="Logo"
//           style={{ width: "100px", height: "100px" }}
//         />
//       </div>
//       <h1>Bughunter Home</h1>
//        <div id="left-cover" class="cover cover-hide">
//             <h1>Welcome !</h1>
//             <h3>Already have an account ?</h3>
//         </div>
        
  
//       {currentUser ? (
//         <p>
//           You are logged - <Link to="/dashboard">View Dashboard</Link>
//         </p>
//       ) : (

//         <>
//           <div id="right-cover" class="cover fade-in-element">
  
//             <h1>Welcome !</h1>
//             <h3>Don't have an account ?</h3>
        
//           </div><p>
//               <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
//             </p></>
//       )}
//     </>
//   );
// };

// export default Home;
