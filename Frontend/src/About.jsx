import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About OHMS</h1>
        <p>
          Welcome to <strong>Online Hospital Management System (OHMS)</strong> – a
          modern solution designed to streamline hospital operations and improve
          patient care through technology.
        </p>

        <ul className="features-list">
          <li>📋 Appointment Scheduling & Management</li>
          <li>🏥 Digital Hospital Record Keeping</li>
          <li>💊 Pharmacy & Prescription Management</li>
          <li>📊 Real-Time Dashboard & Analytics</li>
          <li>🔒 Secure & User-Friendly Interface</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
