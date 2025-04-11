import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Calendar, ClipboardList, FileText } from "lucide-react";
import "./Patientdashboard.css";

const Patientdashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="patient-dashboard-wrapper shared-container">
      <h2 className="dashboard-title">Patient | DASHBOARD</h2>
      <div className="dashboard-cards">
        <div onClick={() => navigate("/dashboard/profile")} className="card">
          <User className="icon text-blue-500" size={40} />
          <div className="title">My Profile</div>
          <div className="subtitle">Update Profile</div>
        </div>

        <div onClick={() => navigate("appointment-history")} className="card">
          <ClipboardList className="icon text-blue-500" size={40} />
          <div className="title">My Appointments</div>
          <div className="subtitle">View Appointment History</div>
        </div>

        <div onClick={() => navigate("book-appointment")} className="card">
          <Calendar className="icon text-blue-500" size={40} />
          <div className="title">Book My Appointment</div>
          <div className="subtitle">Book Appointment</div>
        </div>
        <div onClick={() => navigate("view-prescriptions")} className="card">
  <FileText className="icon text-green-500" size={40} />
  <div className="title">My Prescriptions</div>
  <div className="subtitle">View your prescriptions</div>
</div>

      </div>
    </div>
  );
};

export default Patientdashboard;
