import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import Rlogo from './Rlogo.png';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <img src={Rlogo} alt="One_Hire" className="d-inline-block align-text-top" width="30" height="24" />
          <Link to="/" className="navbar-brand fw-bold ms-2">One_Hire</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item dropdown ms-5">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Get Hired</a></li>
                  <li><a className="dropdown-item" href="#">For Employers</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/about" className="dropdown-item">About Us</Link></li>
                </ul>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-dark ms-5">Find Jobs</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
