import React, { useEffect, useState } from "react";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    // Fetch bugs from backend/API and set to state
    fetch("/api/bugs") // Your backend API endpoint
      .then((response) => response.json())
      .then((data) => setBugs(data))
      .catch((error) => console.error("Error fetching bugs:", error));
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      {bugs.map((bug) => (
        <div key={bug.id}>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          {/* Display other bug details */}
        </div>
      ))}
    </div>
  );
};

export default BugList;
