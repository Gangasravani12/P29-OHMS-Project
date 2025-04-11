import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img
          src="https://media.istockphoto.com/vectors/tree-icon-vector-id937612960?k=20&m=937612960&s=612x612&w=0&h=sa2XRi437zMuI_tpT1YkeHwD0few1mbyq5GEsDD5KpE="
          alt="logo"
        />
        <h1>Online Hospital Management System</h1>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
