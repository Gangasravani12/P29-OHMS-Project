import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentHistory.css";

const ViewDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    setLoading(true);
    axios.get("http://localhost:8000/admin/doctors")
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
    if (!confirmDelete) return;

    setDeletingId(id);
    try {
      await axios.delete(`http://localhost:8000/admin/doctors/${id}`);
      setDoctors((prev) => prev.filter((doc) => doc.id !== id));
    } catch (error) {
      console.error("Failed to delete doctor:", error);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <p className="loading">⏳ Fetching doctors...</p>;

  return (
    <div className="outer-wrapper">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>All Doctors</h2>
        </div>
        {doctors.length === 0 ? (
          <p className="no-data">No doctors found.</p>
        ) : (
          <div className="outer-scroll-wrapper">
            <div className="appointments-list">
              {doctors.map((doc) => (
                <div key={doc.id} className="appointment-card">
                    <h3>ID : {doc.id}</h3>
                  <h3>{doc.doctorName}</h3>
                  <p><strong>Email:</strong> {doc.doctorEmail}</p>
                  <p><strong>Specialization:</strong> {doc.specialization}</p>
                  <p><strong>Fee:</strong> ₹{doc.fee}</p>
                  <p><strong>Address:</strong> {doc.address}</p>
                  <p><strong>Mobile:</strong> {doc.mobileNumber}</p>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(doc.id)}
                    disabled={deletingId === doc.id}
                  >
                    {deletingId === doc.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDoctor;
