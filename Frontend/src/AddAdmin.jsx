import React, { useState } from "react";
import axios from "axios";
import "./AddAdmin.css";

const AddAdmin = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await axios.post("http://localhost:8000/admin/add", form);
      if (response.status === 200 || response.status === 201) {
        setSuccessMsg("Admin added successfully!");
        setForm({ name: "", email: "", password: "" });
      }
    } catch (error) {
      console.error("Error adding admin:", error);
      if (error.response?.data?.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Failed to add admin. Please try again.");
      }
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-heading">Add Admin</h2>

      {errorMsg && <div className="alert error-alert">{errorMsg}</div>}
      {successMsg && <div className="alert success-alert">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Admin Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Admin Email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" className="submit-btn">Add Admin</button>
      </form>
    </div>
  );
};

export default AddAdmin;
