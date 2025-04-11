import React, { useState } from "react";
import axios from "axios";
import "./AddPrescription.css"; // Create this CSS file for styling

const AddPrescription = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    cause: "",
    medicines: "",
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

    if (!form.name || !form.email || !form.date || !form.cause || !form.medicines) {
      setErrorMsg("Please fill all fields.");
      setSuccessMsg("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/doctor/prescriptions", form);

      if (response.status === 200 || response.status === 201) {
        setSuccessMsg("Prescription added successfully!");
        setErrorMsg("");
        setForm({
          name: "",
          email: "",
          date: "",
          cause: "",
          medicines: "",
        });
      }
    } catch (error) {
      console.error("Error saving prescription:", error);
      setErrorMsg("Failed to add prescription. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <div className="prescription-container">
      <h2 className="prescription-heading">Add Prescription</h2>

      {errorMsg && <div className="alert error-alert">{errorMsg}</div>}
      {successMsg && <div className="alert success-alert">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="prescription-form">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Patient Name" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Patient Email" />
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input type="text" name="cause" value={form.cause} onChange={handleChange} placeholder="Cause" />
        <textarea name="medicines" value={form.medicines} onChange={handleChange} placeholder="Medicines" rows={4} />
        <button type="submit" className="submit-btn">Add Prescription</button>
      </form>
    </div>
  );
};

export default AddPrescription;
