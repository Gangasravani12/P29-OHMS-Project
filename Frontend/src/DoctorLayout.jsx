import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./DashboardLayout.css"; // Reuse same styling

const DoctorLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-header">
            <h2>OHMS</h2>
          </div>
          <nav className="sidebar-nav">
            <ul>
            <li>
                <Link to="/doctordashboard">Dashboard</Link>
              </li>
              <li>

                <Link to="/doctordashboard/doctor-profile">Update Profile</Link>
              </li>
              <li>
                <Link to="/doctordashboard/add-prescription">Add Prescription</Link>
              </li>
              <li>
                <Link to="/doctordashboard/doctor-appointments">My Appointments</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        <header className="main-header">
          Online Hospital Management System
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
