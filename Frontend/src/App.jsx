import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login";
import PatientDashboard from "./Patientdashboard";
import DashboardLayout from "./DashboardLayout";
import Profile from "./Profile"
import AppointmentHistory from "./AppointmentHistory"
import BookAppointment from "./BookAppointment"
import ViewPrescription from "./ViewPrescription";
import DoctorDashboard from "./DoctorDashboard";
import AddPrescription from "./AddPrescription";
import DoctorProfile from "./DoctorProfile";
import DoctorAppointments from "./DoctorAppointments";
import DoctorLayout from "./DoctorLayout";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AddDoctor from "./AddDoctor";
import ViewAdmin from "./ViewAdmin";
import ViewAppointment from "./ViewAppointment";
import ViewDoctor from "./ViewDoctor";
import ViewPatient from "./ViewPatient";
import ViewQuery from "./ViewQuery";
import AddAdmin from "./AddAdmin";
function App() {
  return (
    <Routes>
      {/* Public pages wrapped in MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Dashboard layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<PatientDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="appointment-history" element={<AppointmentHistory/>} />
        <Route path="book-appointment" element={<BookAppointment/>} />
        <Route path="view-prescriptions" element={<ViewPrescription/>} />
      </Route>

      {/* Doctor dashboard */}

      <Route path="/doctordashboard" element={<DoctorLayout />}>
        <Route index element={<DoctorDashboard />} />
        <Route path="doctor-profile" element={<DoctorProfile />} />
        <Route path="doctor-appointments" element={<DoctorAppointments />} />
        <Route path="add-prescription" element={<AddPrescription />} />
      </Route>

      {/* admin dashboard */}
      <Route path="/admindashboard" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="view-admin" element={<ViewAdmin />} />
        <Route path="view-doctor" element={<ViewDoctor />} />
        <Route path="view-patient" element={<ViewPatient />} />
        <Route path="view-query" element={<ViewQuery />} />
        <Route path="view-appointment" element={<ViewAppointment />} />
        <Route path="add-doctor" element={<AddDoctor />} />
        <Route path="add-admin" element={<AddAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
