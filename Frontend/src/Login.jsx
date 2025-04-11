import React, { useState } from 'react';
import { Shield, User, Stethoscope, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    { id: 'admin', label: 'Admin', icon: Shield },
    { id: 'patient', label: 'Patient', icon: User },
    { id: 'doctor', label: 'Doctor', icon: Stethoscope },
  ];

  const getLoginUrl = (role) => {
    switch (role) {
      case 'admin':
        return 'http://localhost:8000/admin/login';
      case 'doctor':
        return 'http://localhost:8000/doctor/login';
      default:
        return 'http://localhost:8000/patient/login';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || (selectedRole !== 'doctor' && !password)) {
      setError("Email and password are required.");
      return;
    }

    const payload = selectedRole === 'doctor' ? { doctorEmail: email } : { email, password };

    try {
      const response = await fetch(getLoginUrl(selectedRole), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token || '');
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('userEmail', email);

        if (data.role === 'admin') navigate('/admindashboard');
        else if (data.role === 'doctor') {
          localStorage.setItem('doctorEmail', email); // ✅ Store separately for doctor
          navigate('/doctordashboard');}
else navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Invalid login credentials.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Login to HealthCare Portal</h2>
          <p>Access your account</p>
        </div>
        <div className="login-body">
          <div className="role-selector">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`role-button ${selectedRole === role.id ? 'active' : ''}`}
              >
                {React.createElement(role.icon, { size: 16 })}
                <span>{role.label}</span>
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            {selectedRole !== 'doctor' && (
              <div className="form-group password-group">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">
              Login as {roles.find((r) => r.id === selectedRole)?.label}
            </button>
          </form>
        </div>
        <div className="login-footer">
          {selectedRole === 'patient' ? (
            <p>
              Don't have an account?{' '}
              <button className="signup-button" onClick={() => navigate('/Register')}>
                Sign up
              </button>
            </p>
          ) : (
            <p>Please contact your administrator to add your details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
