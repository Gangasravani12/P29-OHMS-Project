import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({
    doctorName: "",
    doctorEmail: "",
    specialization: "",
    fee: "",
    address: "",
    mobileNumber: "",
  });

  const [originalEmail, setOriginalEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("doctorEmail");
    if (email) {
      setOriginalEmail(email); // store the original email separately
      axios
        .get(`http://localhost:8000/doctor/profile/${email}`)
        .then((response) => {
          setDoctor(response.data);
        })
        .catch((error) => {
          console.error("Doctor not logged in or profile not found", error);
          setMessage("❌ Doctor not logged in or profile not found");
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/doctor/update/${originalEmail}`, doctor)
      .then((response) => {
        setDoctor(response.data);
        localStorage.setItem("doctorEmail", doctor.doctorEmail); // Update localStorage if email changed
        setOriginalEmail(doctor.doctorEmail); // Update the original email for future updates
        setMessage("✅ Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile", error);
        setMessage("❌ Failed to update profile.");
      });
  };

  return (
    <div className="doctor-profile-container">
      <h2 className="doctor-profile-heading">👩‍⚕️ Update Doctor Profile</h2>

      {message && <p className="doctor-profile-message">{message}</p>}

      <form onSubmit={handleSubmit} className="doctor-profile-form">
        <div>
          <label className="doctor-profile-label">Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            value={doctor.doctorName}
            onChange={handleChange}
            className="doctor-profile-input"
            required
          />
        </div>

        <div>
          <label className="doctor-profile-label">Doctor Email</label>
          <input
            type="email"
            name="doctorEmail"
            value={doctor.doctorEmail}
            onChange={handleChange}
            className="doctor-profile-input"
            required
          />
        </div>

        <div>
          <label className="doctor-profile-label">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            className="doctor-profile-input"
            required
          />
        </div>

        <div>
          <label className="doctor-profile-label">Fee</label>
          <input
            type="number"
            name="fee"
            value={doctor.fee}
            onChange={handleChange}
            className="doctor-profile-input"
            required
          />
        </div>

        <div>
          <label className="doctor-profile-label">Address</label>
          <input
            type="text"
            name="address"
            value={doctor.address}
            onChange={handleChange}
            className="doctor-profile-input"
            required
          />
        </div>

        <div>
          <label className="doctor-profile-label">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={doctor.mobileNumber}
            onChange={handleChange}
            className="doctor-profile-input"
            required
          />
        </div>

        <button type="submit" className="doctor-profile-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default DoctorProfile;
