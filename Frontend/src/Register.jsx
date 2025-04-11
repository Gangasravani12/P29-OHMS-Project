import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_number: "",
        gender: "Male",
        country: "",
        address: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // success or error
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitPatient = async () => {
        if (formData.email.toLowerCase().includes("doctor")) {
            setMessage("❌ Doctors are not allowed to register. Please log in instead.");
            setMessageType("error");
            setTimeout(() => setMessage(""), 5000); // Hide message after 5 sec
            return;
        }

        if (!formData.name || !formData.email || !formData.mobile_number || !formData.country || !formData.address || !formData.password) {
            setMessage("⚠️ Please fill in all fields.");
            setMessageType("warning");
            setTimeout(() => setMessage(""), 5000);
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("http://localhost:8000/patient/save", formData, {
                headers: { "Content-Type": "application/json" }
            });

            setMessage(response.data);
            setMessageType("success");
            setFormData({ name: "", email: "", mobile_number: "", gender: "Male", country: "", address: "", password: "" }); // Reset form
        } catch (error) {
            setMessage("❌ Registration failed. Try again.");
            setMessageType("error");
            console.error("Error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
            setTimeout(() => setMessage(""), 5000);
        }
    };

    return (
        <div className="container">
            <div className="form-box">
                <h2 className="heading">Patient Registration</h2>

                {message && (
                    <div className={`alert ${messageType}`}>
                        {message}
                    </div>
                )}

                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="input" />

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" />

                <input type="text" name="mobile_number" placeholder="Mobile Number" value={formData.mobile_number} onChange={handleChange} className="input" />

                <select name="gender" value={formData.gender} onChange={handleChange} className="input">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="input" />

                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input" />

                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input" />

                <button onClick={submitPatient} className="button" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="info">
    If you are a <span style={{ color: "red", fontWeight: "bold",backgroundColor:"yellow",padding:"3px" }}>Doctor</span> , please <Link to="/login" className="login-link">Log in</Link>.
</p>

            </div>
        </div>
    );
};

export default Register;
