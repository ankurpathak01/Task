import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom"; //link that knows whether or not it is active
import { useSelector } from "react-redux";  //takes current state as an argument and returns whatever data you want from it
import handleCart from "../redux/actions/reducers/handleCart"; // import reducer handleCart.jsx
const Navbar = () => {
  const state = useSelector((state) => state.handleCart); //returns loaction in selected state in array of object id and name

  return (

    <div>
      <nav className="navbar navbar-expand-lg py-3 shadow-sw">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="https://www.sears.com/">SEARS</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Product">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/Login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-2"></i>Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i>Cart ({state.length})
              </NavLink>

            </div>

          </div>
        </div>
      </nav>
    </div>

  )
}
export default Navbar;