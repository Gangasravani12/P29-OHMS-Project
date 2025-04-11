import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./DashboardLayout.css"; // Reuse same styling

const AdminLayout = () => {
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
                <Link to="/admindashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/admindashboard/view-patient">View Patient</Link>
              </li>
              <li>
                <Link to="/admindashboard/view-appointment">View Appointment</Link>
              </li>
              <li>
                <Link to="/admindashboard/view-doctor">View Doctors</Link>
              </li>
              <li>
                <Link to="/admindashboard/view-admin">View Admins</Link>
              </li>
              <li>
                <Link to="/admindashboard/add-admin">Add Admin</Link>
              </li>
              <li>
                <Link to="/admindashboard/add-doctor">Add Doctor</Link>
              </li>
              <li>
                <Link to="/admindashboard/view-query">View Query</Link>
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

export default AdminLayout;
