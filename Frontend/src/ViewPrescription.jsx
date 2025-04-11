import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentHistory.css"; // Reuse same styles for now

const ViewPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8000/doctor/prescriptions/${email}`)
        .then((res) => {
          setPrescriptions(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching prescriptions:", err);
          setLoading(false);
        });
    }
  }, [email]);

  if (loading) {
    return <p className="loading">⏳ Fetching prescriptions...</p>;
  }

  return (
    <div className="outer-wrapper">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>Your Prescriptions</h2>
        </div>
        {prescriptions.length === 0 ? (
          <p className="no-data">No prescriptions found.</p>
        ) : (
          <div className="outer-scroll-wrapper">
            <div className="appointments-list">
              {prescriptions.map((prescription, index) => (
                <div key={index} className="appointment-card">
                  <h3>{prescription.name}</h3>
                  <p><strong>Email:</strong> {prescription.email}</p>
                  <p><strong>Date:</strong> {prescription.date}</p>
                  <p><strong>Cause:</strong> {prescription.cause}</p>
                  <p><strong>Medicines:</strong> {prescription.medicines}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPrescription;
