import React from 'react';
import './Nav.css';
import logo from "../../Assets/navbar.jpg"; // Example logo (optional)

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar">
      <div className="container-fluid">
        {/* Navbar Logo and Brand */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Pet Shop Logo" className="navbar-logo" />
          Pet Shop
        </a>

        {/* Navbar Toggler for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link" href="#">Blog</a>
            <a className="nav-link" href="#">Contact</a>
            <a className="nav-link profile-nav" href="#">Profile</a>
          </div>
          
          {/* Profile Icon and Sign Up Button */}
          <div className="navbar-actions d-flex align-items-center">
            <a href="#" className="icon-profile mx-2">
              <i className="ri-shield-user-line"></i>
            </a>
            <button type="button" className="btn btn-dark">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
