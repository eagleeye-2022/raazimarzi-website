"use client";
import { useState } from "react";
import "@/styles/signin.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
    }, 1500);
  };

  return (
    <section className="login-page">
      <div className="login-card">

        {/* LEFT IMAGE */}
        <div className="login-image">
          <img src="/assets/images/login.png" alt="Login" />
        </div>

        {/* RIGHT FORM */}
        <div className="login-form">
          <img
            src="/assets/images/logo.png"
            alt="RaaziMarzi"
            className="login-logo"
          />

          <span className="odr-pill">ODR Platform</span>

          <h2>Welcome to Raazimerzi</h2>
          <p className="sub-text">
            Sign in to resolving your disputes online.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-options">
              <span className="forgot">Forgot Password?</span>
            </div>

            {error && <p className="error">{error}</p>}

            <button className="login-btn" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account? <span>Sign Up</span>
          </p>

          <div className="social-login">
            <img src="/assets/icons/google.png" alt="Google" />
            <img src="/assets/icons/linkdin.png" alt="LinkedIn" />
            <img src="/assets/icons/phone.png" alt="Mobile" />
            <img src="/assets/icons/fb.png" alt="Facebook" />
          </div>
        </div>
      </div>
    </section>
  );
}
