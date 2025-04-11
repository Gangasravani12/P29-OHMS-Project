import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const oldEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (oldEmail) {
      axios
        .get(`http://localhost:8000/patient/getone/${oldEmail}`)
        .then((res) => {
          setPatient({
            name: res.data.name || "",
            email: res.data.email || "",
            password: res.data.password || "",
            address: res.data.address || ""
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching patient:", err);
          setMessage("❌ Failed to fetch profile.");
          setLoading(false);
        });
    } else {
      setMessage("❌ User not logged in.");
      setLoading(false);
    }
  }, [oldEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMsg("");

    if (!patient.name || !patient.email || !patient.password) {
      setAlertMsg("⚠️ Please fill all required fields.");
      return;
    }

    setUpdating(true);
    try {
      const res = await axios.put(
        `http://localhost:8000/patient/update/${oldEmail}`,
        patient,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        setMessage("✅ Profile updated successfully!");
        localStorage.setItem("userEmail", patient.email);
      } else {
        setMessage("⚠️ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Update Error:", error.response?.data || error.message);
      setMessage("❌ Failed to update profile.");
    } finally {
      setUpdating(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  if (loading) return <p className="text-center mt-10">⏳ Loading profile...</p>;

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="welcome">Welcome, {patient.name}!</h2>
        <p className="subheading">Please fill your profile details carefully.</p>

        {alertMsg && <p className="alert">{alertMsg}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={patient.name}
              onChange={handleChange}
              className="input"
              placeholder=" "
              required
            />
            <label className="input-label">Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={patient.email}
              onChange={handleChange}
              className="input"
              placeholder=" "
              required
            />
            <label className="input-label">Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={patient.password}
              onChange={handleChange}
              className="input"
              placeholder=" "
              required
            />
            <label className="input-label">Password</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="address"
              value={patient.address}
              onChange={handleChange}
              className="input"
              placeholder=" "
            />
            <label className="input-label">Address</label>
          </div>

          <button type="submit" className="button" disabled={updating}>
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </form>

        {message && <p className="response">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
