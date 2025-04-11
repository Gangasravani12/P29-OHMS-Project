import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DoctorAppointments.css"; // Reusing same CSS styles

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const doctorEmail = localStorage.getItem("userEmail"); // Assuming doctor email is stored like this

  useEffect(() => {
    if (doctorEmail) {
      axios
        .get(`http://localhost:8000/patient/appointment/doctor/${doctorEmail}`)
        .then((res) => {
          setAppointments(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching appointments:", err);
          setLoading(false);
        });
    }
  }, [doctorEmail]);

  const handleUpdateStatus = async (appointmentId) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/doctor/appointments/update-status/${appointmentId}?status=checked`
      );
      const updated = response.data;
  
      // Update the local appointment state
      setAppointments((prev) =>
        prev.map((app) =>
          app.id === appointmentId ? { ...app, status: updated.status } : app
        )
      );
    } catch (error) {
      console.error("Failed to update appointment status:", error);
      alert("Failed to update status");
    }
  };
  

  if (loading) {
    return <p className="loading">⏳ Fetching appointments...</p>;
  }

  return (
    <div className="outer-wrapper">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>Your Appointments</h2>
        </div>
        {appointments.length === 0 ? (
          <p className="no-data">No appointments found.</p>
        ) : (
          <div className="outer-scroll-wrapper">
            <div className="appointments-list">
              {appointments.map((app, index) => (
                <div key={index} className="appointment-card">
                    <h3>Id : {app.id}</h3>
                  <h3>{app.name}</h3>
                  <p><strong>Email:</strong> {app.email}</p>
                  <p><strong>Date:</strong> {app.date}</p>
                  <p><strong>Time:</strong> {app.time}</p>
                  <p><strong>Status:</strong> 
                    <span className={`status ${app.status.toLowerCase()}`}>
                      {app.status}
                    </span>
                  </p>
                  {app.status.toLowerCase() !== "checked" && (
                    <button
                      className="update-button"
                      onClick={() => handleUpdateStatus(app.id)}
                    >
                      Mark as Checked
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;
