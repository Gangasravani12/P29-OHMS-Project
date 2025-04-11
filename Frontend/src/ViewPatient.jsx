import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentHistory.css";

const ViewPatient = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/admin/patients")
      .then((res) => {
        setPatients(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">⏳ Fetching patients...</p>;

  return (
    <div className="outer-wrapper">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>All Patients</h2>
        </div>
        {patients.length === 0 ? (
          <p className="no-data">No patients found.</p>
        ) : (
          <div className="outer-scroll-wrapper">
            <div className="appointments-list">
              {patients.map((pat, index) => (
                <div key={index} className="appointment-card">
                  <h3>{pat.name}</h3>
                  <p><strong>Email:</strong> {pat.email}</p>
                  <p><strong>Address:</strong> {pat.address}</p>
                  <p><strong>Mobile:</strong> {pat.mobile_number}</p>
                  <p><strong>Gender:</strong> {pat.gender}</p>
                  <p><strong>Country:</strong> {pat.country}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPatient;
