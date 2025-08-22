import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./offkulture-logo.png";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    
    // Simulate API call
    setIsLoading(true);
    setMessage("");
    
    setTimeout(() => {
      setIsLoading(false);
      setMessage("If an account exists with this email, you will receive password reset instructions shortly.");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="fullscreen-container">
      {/* Small logo in top-left */}
      <div className="logo-top-left">
        <img src={logo} alt="Off Kulture" />
      </div>

      <div className="centered-card">
        <div className="tabs">
          <button 
            type="button" 
            className="inactive"
            onClick={() => navigate("/")}
          >
            Sign in
          </button>
          <button 
            type="button" 
            className="inactive"
            onClick={() => navigate("/join")}
          >
            Join now
          </button>
          <button type="button" className="active">Reset password</button>
        </div>

        <h2 className="welcome-title">Reset Your Password</h2>
        <p className="welcome-subtext">Enter your email address below</p>

        <form className="signin-form" onSubmit={handleResetPassword}>
          <div className="form-group">
            <label>Email address</label>
            <input 
              type="email" 
              placeholder="Required" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="signin-button"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        <div className="footer-links">
          <a href="#" onClick={() => navigate("/")}>Back to Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;