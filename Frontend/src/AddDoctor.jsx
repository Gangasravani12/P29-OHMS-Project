import React, { useState } from "react";
import axios from "axios";
import "./AddDoctor.css"; // optional styling

const AddDoctor = () => {
  const [form, setForm] = useState({
    doctorName: "",
    doctorEmail: "",
    fee: "",
    address: "",
    specialization: "",
    mobileNumber: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/admin/doctor/add", form);
      if (res.status === 200) {
        setSuccessMsg("Doctor added successfully!");
        setErrorMsg("");
        setForm({
          doctorName: "",
          doctorEmail: "",
          fee: "",
          address: "",
          specialization: "",
          mobileNumber: "",
        });
      }
    } catch (err) {
      console.error("Error adding doctor:", err);
      setErrorMsg("Failed to add doctor. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <div className="add-doctor-container">
      <h2 className="add-doctor-heading">Add Doctor</h2>

      {errorMsg && <div className="alert error-alert">{errorMsg}</div>}
      {successMsg && <div className="alert success-alert">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="add-doctor-form">
        <input type="text" name="doctorName" value={form.doctorName} onChange={handleChange} placeholder="Doctor Name" required />
        <input type="email" name="doctorEmail" value={form.doctorEmail} onChange={handleChange} placeholder="Doctor Email" required />
        <input type="number" name="fee" value={form.fee} onChange={handleChange} placeholder="Fee" required />
        <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="specialization" value={form.specialization} onChange={handleChange} placeholder="Specialization" required />
        <input type="text" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />
        <button type="submit" className="submit-btn">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
