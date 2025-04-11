import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    doctorName: "",
    doctorEmail: "",
    specialization: "",
    fee: "",
    date: "",
    time: "",
    status: "Pending",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      axios
        .get(`http://localhost:8000/patient/getone/${userEmail}`)
        .then((res) => {
          if (res.data) {
            setForm((prev) => ({
              ...prev,
              name: res.data.name,
              email: res.data.email,
            }));
          }
        })
        .catch((err) => {
          console.error("Failed to fetch user:", err);
          setErrorMsg("Failed to load user details.");
        });
    }
  }, []);

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
      const res = await axios.get(`http://localhost:8000/patient/appointment/get/${form.email}`);
      const appointments = res.data;

      const isDuplicate = appointments.some(
        (a) =>
          a.doctorEmail === form.doctorEmail &&
          a.date === form.date &&
          a.time === form.time
      );

      if (isDuplicate) {
        setErrorMsg("Appointment already exists. Please change the time or date.");
        setSuccessMsg("");
        return;
      }

      const response = await axios.post("http://localhost:8000/patient/appointment/save", form);
      if (response.status === 200) {
        setSuccessMsg("Appointment booked successfully!");
        setErrorMsg("");
        setForm((prev) => ({
          ...prev,
          doctorName: "",
          doctorEmail: "",
          specialization: "",
          fee: "",
          date: "",
          time: "",
        }));
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      setErrorMsg("Something went wrong. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <div className="appointment-container">
      <h2 className="appointment-heading">Book Appointment</h2>

      {errorMsg && <div className="alert error-alert">{errorMsg}</div>}
      {successMsg && <div className="alert success-alert">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="appointment-form">
        <input type="text" name="name" value={form.name} readOnly placeholder="Your Name" />
        <input type="email" name="email" value={form.email} readOnly placeholder="Your Email" />
        <input type="text" name="doctorName" value={form.doctorName} onChange={handleChange} placeholder="Doctor Name" />
        <input type="email" name="doctorEmail" value={form.doctorEmail} onChange={handleChange} placeholder="Doctor Email" />
        <input type="text" name="specialization" value={form.specialization} onChange={handleChange} placeholder="Specialization" />
        <input type="number" name="fee" value={form.fee} onChange={handleChange} placeholder="Fee" />
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input type="time" name="time" value={form.time} onChange={handleChange} />
        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
