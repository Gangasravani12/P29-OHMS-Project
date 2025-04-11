import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentHistory.css";

const ViewQuery = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSolutions, setEditingSolutions] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/admin/queries")
      .then((res) => {
        setQueries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching queries:", err);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (id, value) => {
    setEditingSolutions(prev => ({ ...prev, [id]: value }));
  };

  const handleUpdateClick = (id) => {
    const solution = editingSolutions[id];
    if (!solution || solution.trim() === "") {
      alert("Please enter a solution first.");
      return;
    }

    axios.put(`http://localhost:8000/admin/updateSolution/${id}`, { solution })
      .then(() => {
        setQueries(prev =>
          prev.map(q => (q.id === id ? { ...q, solution } : q))
        );
        alert("✅ Solution updated and stored in database.");
        setEditingSolutions(prev => ({ ...prev, [id]: "" }));
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("❌ Failed to update solution.");
      });
  };

  if (loading) return <p className="loading">⏳ Fetching queries...</p>;

  return (
    <div className="outer-wrapper">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>User Queries</h2>
        </div>
        {queries.length === 0 ? (
          <p className="no-data">No queries found.</p>
        ) : (
          <div className="outer-scroll-wrapper">
            <div className="appointments-list">
              {queries.map((q) => (
                <div key={q.id} className="appointment-card">
                    <h3>Id : {q.id}</h3>
                  <h3>{q.name}</h3>
                  <p><strong>Email:</strong> {q.email}</p>
                  <p><strong>Question:</strong> {q.question}</p>
                  <p><strong>Solution:</strong> {q.solution || "No solution yet"}</p>

                  <input
                    type="text"
                    value={editingSolutions[q.id] || ""}
                    placeholder="Enter solution..."
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    className="solution-input"
                  />
                  <button onClick={() => handleUpdateClick(q.id)} className="update-button">
                    Update Solution
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

export default ViewQuery;
