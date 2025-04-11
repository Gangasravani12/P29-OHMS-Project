import axios from "axios";
import { useState } from "react";
import "./Contact.css"; // Import CSS file

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", question: "" });
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false); // Loading state for better UX

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitQuery = async () => {
        // Input Validation: Prevent Empty Fields
        if (!formData.name || !formData.email || !formData.question) {
            setResponse("⚠️ Please fill in all fields.");
            return;
        }

        setLoading(true); // Start loading

        try {
            const res = await axios.post("http://localhost:8000/query/submit", formData, {
                headers: { "Content-Type": "application/json" }
            });

            if (res.status === 200 || res.status === 201) {
                setResponse("✅ Query submitted successfully!");
                setFormData({ name: "", email: "", question: "" }); // Reset form
            } else {
                setResponse("⚠️ Something went wrong. Try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error.response?.data || error.message);

            // More descriptive error messages
            if (error.response) {
                setResponse(`❌ Error: ${error.response.data}`);
            } else {
                setResponse("❌ Server is unreachable. Check API status.");
            }
        } finally {
            setLoading(false); // Stop loading
            setTimeout(() => setResponse(""), 5000); // Hide response after 5 sec
        }
    };

    return (
        <div className="container">
            <div className="form-box">
                <h2 className="heading">Contact Us</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                />

                <textarea
                    name="question"
                    placeholder="Your Question"
                    rows="4"
                    value={formData.question}
                    onChange={handleChange}
                    className="textarea"
                />

                <button onClick={submitQuery} className="button" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Query"}
                </button>

                {response && <p className="response">{response}</p>}
            </div>
        </div>
    );
};

export default Contact;
