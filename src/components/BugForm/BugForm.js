import React, { useState } from "react";
import "./BugForm.css";

const BugForm = ({ onBugSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const categories = [
    "Backend",
    "UI/UX",
    "Functionality",
    "Performance",
    "Security",
    "Others",
  ];
  const priorities = ["Low", "Medium", "High", "Critical"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare bug data
      const bugData = {
        title,
        author,
        category,
        priority,
        description,
      };

      // Make a POST request to your server-side API
      const response = await fetch("http://localhost:5000/api/createBug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bugData),
      });

      if (response.ok) {
        // Bug successfully created on the server
        const newBug = await response.json();

        // Notify parent component about the new bug
        onBugSubmit(newBug);

        // Close the modal using the onClose prop
        onClose();

        // Clear form fields
        setTitle("");
        setAuthor("");
        setCategory("");
        setPriority("");
        setDescription("");
      } else {
        // Handle error if bug creation fails
        console.error("Error submitting bug:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting bug:", error);
      throw error;
    }
  };

  return (
    <div className="bug-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority</option>
          {priorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit Bug</button>
      </form>
    </div>
  );
};

export default BugForm;
