import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentHistory.css";

const ViewAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ email: "", password: "" });

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = () => {
    axios.get("http://localhost:8000/admin/admins")
      .then((res) => {
        setAdmins(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching admins:", err);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      axios.delete(`http://localhost:8000/admin/delete/${id}`)
        .then(() => {
          fetchAdmins();
        })
        .catch((err) => console.error("Failed to delete admin:", err));
    }
  };

  const handleEditClick = (admin) => {
    setEditingId(admin.id);
    setEditData({ email: admin.email, password: admin.password });
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:8000/admin/update/${id}`, editData)
      .then(() => {
        setEditingId(null);
        fetchAdmins();
      })
      .catch((err) => console.error("Failed to update admin:", err));
  };

  if (loading) return <p className="loading">⏳ Fetching admin data...</p>;

  return (
    <div className="outer-wrapper">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>All Admins</h2>
        </div>
        {admins.length === 0 ? (
          <p className="no-data">No admins found.</p>
        ) : (
          <div className="outer-scroll-wrapper">
            <div className="appointments-list">
              {admins.map((admin) => (
                <div key={admin.id} className="appointment-card">
                  <h3>{admin.name}</h3>
                  {editingId === admin.id ? (
                    <>
                      <p>
                        <strong>Email:</strong>{" "}
                        <input
                          value={editData.email}
                          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        />
                      </p>
                      <p>
                        <strong>Password:</strong>{" "}
                        <input
                          value={editData.password}
                          onChange={(e) => setEditData({ ...editData, password: e.target.value })}
                        />
                      </p>
                      <button className="save-btn" onClick={() => handleUpdate(admin.id)}>Save</button>
                      <button onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <p><strong>Email:</strong> {admin.email}</p>
                      <p><strong>Password:</strong> {admin.password}</p>
                      <button className="cancel-btn" onClick={() => handleEditClick(admin)}>Edit</button>
                      <button onClick={() => handleDelete(admin.id)}>Delete</button>
                    </>
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

export default ViewAdmin;
