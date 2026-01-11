import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span onClick={() => navigate("/")} className="logo-link">
          CMS
        </span>
      </div>

      <ul className="nav-links">
        <li>
          <span onClick={() => navigate("/")} className="nav-link">
            Home
          </span>
        </li>
        <li>
          <span
            onClick={() => navigate("/createBlog")}
            className="btn-primary"
          >
            + Add Blog
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
