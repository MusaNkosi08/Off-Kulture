import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./offkulture-logo.png";
import "./JoinNow.css";

function JoinNow() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    
    if (email !== confirmEmail) {
      alert("Email addresses do not match.");
      return;
    }
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    
    alert(`Welcome to OffKulture! Check your email for confirmation.`);
    navigate("/");
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
          <button type="button" className="active">Join now</button>
        </div>

        <h2 className="welcome-title">Join OffKulture</h2>
        <p className="welcome-subtext">Create your account below</p>

        <form className="signin-form" onSubmit={handleJoin}>
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

          <div className="form-group">
            <label>Confirm email address</label>
            <input 
              type="email" 
              placeholder="Required" 
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Required (min 8 characters)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Confirm password</label>
            <input 
              type="password" 
              placeholder="Required" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="signin-button">Join Now</button>
        </form>

        <div className="footer-links">
          <a href="#" onClick={() => navigate("/")}>Back to Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default JoinNow;