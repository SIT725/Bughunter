import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../controller/Auth";
import { auth } from "../controller/firebase"; 

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Route to="/signup" />;
  }
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in.</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;
