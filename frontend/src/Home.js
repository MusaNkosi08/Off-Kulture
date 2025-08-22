import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./offkulture-logo.png";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  // Categories like Mr Price
  const categories = [
    "Just Dropped", "Ladies", "Mens", "Shoes", "Everyday Basics", 
    "Kids", "Baby", "Beauty", "Novelty", "Inspo", "Promos", "Cellular"
  ];

  const indiesCategories = [
    "Men", "Women", "Baby", "Shoes", "Accessories",
  ];

  return (
    <div className="home-container">
      {/* Header with logo and sign out */}
      <header className="home-header">
        <div className="header-top">
          <div className="brand-section">
            <img src={logo} alt="OffKulture" className="header-logo" />
            <div className="brand-text">
              <h1 className="title">OFF<span className="green-text">KULTURE</span></h1>
              <p className="subtitle">STAY LOUD, STAY YOU.</p>
            </div>
          </div>
          <button className="sign-out-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>

        {/* Navigation - Mr Price style */}
        <nav className="main-nav">
          <ul className="nav-list">
            {categories.map((category, index) => (
              <li key={index} className="nav-item">
                <a href="#" className="nav-link">{category}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main content - SIMPLIFIED without background images */}
      <main className="home-main">
        {/* Simple welcome section */}
        <section className="welcome-section">
          <h2>WELCOME TO OFFKULTURE</h2>
          <p>Your destination for authentic streetwear culture</p>
        </section>

        {/* Indies Categories - Mr Price style */}
        <section className="indies-section">
          <h3 className="section-title">Squad</h3>
          <div className="indies-categories">
            {indiesCategories.map((category, index) => (
              <div key={index} className="indie-category">
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Simple promo section */}
        <section className="promo-section">
          <h3>NEW COLLECTION AVAILABLE NOW</h3>
          <button className="cta-button">SHOP NOW</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <p>
            We use cookies to ensure you get the best possible experience. 
            By using this site we assume your consent.
          </p>
          <p className="copyright">© 2023 OffKulture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;