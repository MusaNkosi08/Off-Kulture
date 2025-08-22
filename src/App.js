import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import logo from "./offkulture-logo.png";
import JoinNow from "./JoinNow";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import "./App.css";

// SignIn component separated for better navigation handling
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    
    // Simulate successful sign in
    // In a real app, you would authenticate with your backend here
    console.log("Signing in with:", email, password);
    
    // Redirect to home page after successful sign in
    navigate("/home");
  };

  return (
    <div className="centered-card">
      <div className="tabs">
        <div className="logo-top-left">
           <img src={logo} alt="Off Kulture" />
        </div>
        <button type="button" className="active">Sign in</button>
        <button 
          type="button" 
          className="inactive"
          onClick={() => navigate("/join")}
        >
          
          Join now
        </button>
      </div>

      <h2 className="welcome-title">Welcome back!</h2>
      <p className="welcome-subtext">Please sign in below</p>

      <form className="signin-form" onSubmit={handleSignIn}>
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
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Required" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="signin-button">Sign in</button>
      </form>

      <div className="footer-links">
        <a href="#" onClick={() => navigate("/forgot-password")}>Forgot password?</a>
        <a href="#" onClick={() => navigate("/join")}>Not a member? Join now</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="fullscreen-container">
        {/* Small logo in top-left - only show on auth pages */}
        

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/join" element={<JoinNow />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

