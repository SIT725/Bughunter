import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      console.log("start");
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      console.log("done");
      setCurrentUser(true);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
