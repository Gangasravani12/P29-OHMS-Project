import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentHistory.css";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8000/patient/appointment/get/${email}`)
        .then((res) => {
          setAppointments(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching appointments:", err);
          setLoading(false);
        });
    }
  }, [email]);

  if (loading) {
    return <p className="loading">⏳ Fetching appointments...</p>;
  }

  return (
    <div className="outer-wrapper">
    <div className="appointment-container">
      <div className="appointment-header">
        <h2>Your Appointment History</h2>
      </div>
      {appointments.length === 0 ? (
        <p className="no-data">No appointments found.</p>
      ) : (
        <div className="outer-scroll-wrapper">
        <div className="appointments-list">
          {appointments.map((app, index) => (
            <div key={index} className="appointment-card">
              <h3>Dr. {app.doctorName}</h3>
              <p><strong>Specialization:</strong> {app.specialization}</p>
              <p><strong>Appointment Date:</strong> {app.date}</p>
              <p><strong>Time:</strong> {app.time}</p>
              <p><strong>Fee:</strong> ₹{app.fee}</p>
              <p><strong>Status:</strong> <span className={`status ${app.status.toLowerCase()}`}>{app.status}</span></p>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AppointmentHistory;
