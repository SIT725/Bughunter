import React, { useEffect, useState } from "react";
import "./BugTable.css";

const fetchBugs = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/getAllBugs");
    if (response.ok) {
      const bugsData = await response.json();
      return bugsData;
    } else {
      console.error("Error fetching bugs:", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching bugs:", error);
    return [];
  }
};

const BugTable = () => {
  const [bugs, setBugs] = useState([]);
  const [selectedBug, setSelectedBug] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const bugsData = await fetchBugs();

      console.log("Bugs State:", bugsData);
      setBugs(bugsData);
    };

    fetchData();
  }, []);

  const handleBugClick = (bug) => {
    setSelectedBug(bug);
  };

  const handleCloseDetails = () => {
    setSelectedBug(null);
  };

  return (
    <div>
      <h3>Bug Table</h3>
      <div className="bug-table">
        <div className="bug-column open-column">
          <div className="bug-column-header">Open</div>
          {bugs
            .filter((bug) => bug.status === "Open")
            .map((bug) => (
              <div
                key={bug.id}
                className="bug-box"
                onClick={() => handleBugClick(bug)}
              >
                <p>{`Bug ${bug.id}`}</p>
                <p>{bug.title}</p>
                {bug.createdAt && (
                  <p>{`Created at: ${new Date(
                    bug.createdAt.seconds * 1000 +
                      bug.createdAt.nanoseconds / 1000000
                  ).toLocaleString("en-AU", {
                    timeZone: "Australia/Sydney",
                  })}`}</p>
                )}
              </div>
            ))}
        </div>

        <div className="bug-column in-progress-column">
          <div className="bug-column-header">In Progress</div>
          {bugs
            .filter((bug) => bug.status === "In Progress")
            .map((bug) => (
              <div
                key={bug.id}
                className="bug-box"
                onClick={() => handleBugClick(bug)}
              >
                <p>{`Bug ${bug.id}`}</p>
                <p>{bug.title}</p>
                {bug.createdAt && (
                  <p>{`Created at: ${new Date(
                    bug.createdAt.seconds * 1000 +
                      bug.createdAt.nanoseconds / 1000000
                  ).toLocaleString("en-AU", {
                    timeZone: "Australia/Sydney",
                  })}`}</p>
                )}
              </div>
            ))}
        </div>

        <div className="bug-column resolved-column">
          <div className="bug-column-header">Resolved</div>
          {bugs
            .filter((bug) => bug.status === "Resolved")
            .map((bug) => (
              <div
                key={bug.id}
                className="bug-box"
                onClick={() => handleBugClick(bug)}
              >
                <p>{`Bug ${bug.id}`}</p>
                <p>{bug.title}</p>
                {bug.createdAt && (
                  <p>{`Created at: ${new Date(
                    bug.createdAt.seconds * 1000 +
                      bug.createdAt.nanoseconds / 1000000
                  ).toLocaleString("en-AU", {
                    timeZone: "Australia/Sydney",
                  })}`}</p>
                )}
              </div>
            ))}
        </div>
      </div>

      {selectedBug && (
        <div className={`bug-details ${selectedBug ? "active" : ""}`}>
          <h3>{`Bug ${selectedBug.id} Details`}</h3>
          <p>Title: {selectedBug.title}</p>
          <p>Author: {selectedBug.author}</p>
          <p>Category: {selectedBug.category}</p>
          <p>Priority: {selectedBug.priority}</p>
          <p>Description: {selectedBug.description}</p>
          {selectedBug.createdAt && (
            <p>{`Created at: ${new Date(
              selectedBug.createdAt.seconds * 1000 +
                selectedBug.createdAt.nanoseconds / 1000000
            ).toLocaleString("en-AU", {
              timeZone: "Australia/Sydney",
            })}`}</p>
          )}
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      )}
    </div>
  );
};

export default BugTable;
