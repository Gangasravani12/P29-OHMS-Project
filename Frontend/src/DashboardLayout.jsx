import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/book-appointment">Book Appointment</Link>
              </li>
              <li>
                <Link to="/dashboard/appointment-history">My Appointments</Link>
              </li>
              <li>
                <Link to="/dashboard/profile">Update Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/view-prescriptions">View Prescriptions</Link>
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

export default DashboardLayout;
