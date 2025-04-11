import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentHistory.css";

const ViewAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/admin/appointments")
      .then((res) => {
        setAppointments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching appointments:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">⏳ Fetching appointments...</p>;

  return (
    <div className="outer-wrapper">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>All Appointments</h2>
        </div>
        {appointments.length === 0 ? (
          <p className="no-data">No appointments found.</p>
        ) : (
          <div className="outer-scroll-wrapper">
            <div className="appointments-list">
              {appointments.map((app, index) => (
                <div key={index} className="appointment-card">
                  <h3>{app.name}</h3>
                  <p><strong>Email:</strong> {app.email}</p>
                  <p><strong>Doctor:</strong> {app.doctorName} ({app.specialization})</p>
                  <p><strong>Fee:</strong> ₹{app.fee}</p>
                  <p><strong>Date & Time:</strong> {app.date} - {app.time}</p>
                  <p><strong>Status:</strong> {app.status}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAppointment;