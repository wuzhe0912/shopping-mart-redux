import React from 'react';

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            REACT MART
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>
              <span>Login</span>
            </a>
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i>
              <span>Register</span>
            </a>
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>
              <span>Cart (0)</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
