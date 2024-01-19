import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./Auth";
import { auth, firestore } from "../firebase/firebase";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Check if there is a current user and fetch the email
    if (currentUser) {
      // Assuming currentUser.email is available, adjust it accordingly based on your AuthContext implementation
      setUserEmail(currentUser.email);
    }
  }, [currentUser]);

  if (!currentUser) {
    return <Route to="/login" />;
  }
  // if (currentUser) {
  //   return <Navigate to="/Home.html" replace />;
  // }
  return (
    <>
    <header>
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="src/assets/debug.svg" class="h-8" alt="bughunter"></img>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BugHunter</span>
    </Link>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/CreateIssue" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Issue</Link>
        </li>
    </ul> 
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
    </div>
    </div>
    </nav>
    </header>
    <div>
      <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in as {userEmail}.</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="src/assets/debug.svg" class="h-8" alt="Bughunter" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BugHunter</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Bunghunter</a>. All Rights Reserved.</span>
        </div>
      </footer></>
    
  );
  
};

export default Dashboard;