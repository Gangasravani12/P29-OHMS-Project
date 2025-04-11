import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, CalendarCheck2, Stethoscope, ShieldPlus, UserPlus, Mail } from "lucide-react";
import "./Patientdashboard.css"; // Reusing same styles for consistency

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="patient-dashboard-wrapper shared-container">
      <h2 className="dashboard-title">ADMIN | DASHBOARD</h2>
      <div className="dashboard-cards">
        <div onClick={() => navigate("/admindashboard/view-patient")} className="card">
          <Users className="icon text-blue-500" size={40} />
          <div className="title">View Patients</div>
          <div className="subtitle">All Registered Patients</div>
        </div>

        <div onClick={() => navigate("/admindashboard/view-appointment")} className="card">
          <CalendarCheck2 className="icon text-purple-500" size={40} />
          <div className="title">View Appointments</div>
          <div className="subtitle">All Appointments Records</div>
        </div>

        <div onClick={() => navigate("/admindashboard/view-doctor")} className="card">
          <Stethoscope className="icon text-green-500" size={40} />
          <div className="title">View Doctors</div>
          <div className="subtitle">All Doctor Details</div>
        </div>

        <div onClick={() => navigate("/admindashboard/view-admin")} className="card">
          <ShieldPlus className="icon text-yellow-500" size={40} />
          <div className="title">View Admins</div>
          <div className="subtitle">Manage Admin Access</div>
        </div>

        <div onClick={() => navigate("/admindashboard/add-admin")} className="card">
          <UserPlus className="icon text-pink-500" size={40} />
          <div className="title">Add Admin</div>
          <div className="subtitle">Create New Admin Account</div>
        </div>

        <div onClick={() => navigate("/admindashboard/add-doctor")} className="card">
          <Stethoscope className="icon text-indigo-500" size={40} />
          <div className="title">Add Doctor</div>
          <div className="subtitle">Register New Doctor</div>
        </div>

        <div onClick={() => navigate("/admindashboard/view-query")} className="card">
          <Mail className="icon text-red-500" size={40} />
          <div className="title">View Queries</div>
          <div className="subtitle">Patient Contact Messages</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
