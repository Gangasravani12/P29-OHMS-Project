import React from "react";
import { useNavigate } from "react-router-dom";
import { User, ClipboardList, FilePlus } from "lucide-react";
import "./Patientdashboard.css"; // Reusing same styles for consistency

const DoctorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="patient-dashboard-wrapper shared-container">
      <h2 className="dashboard-title">DOCTOR | DASHBOARD</h2>
      <div className="dashboard-cards">
        <div onClick={() => navigate("/doctordashboard/doctor-profile")} className="card">
          <User className="icon text-blue-500" size={40} />
          <div className="title">My Profile</div>
          <div className="subtitle">Update Profile</div>
        </div>

        <div onClick={() => navigate("/doctordashboard/doctor-appointments")} className="card">
          <ClipboardList className="icon text-purple-500" size={40} />
          <div className="title">Appointments</div>
          <div className="subtitle">View Your Appointments</div>
        </div>

        <div onClick={() => navigate("/doctordashboard/add-prescription")} className="card">
          <FilePlus className="icon text-green-500" size={40} />
          <div className="title">Add Prescription</div>
          <div className="subtitle">Write Patient Prescription</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
