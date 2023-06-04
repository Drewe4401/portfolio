import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import React, { useEffect, useState } from 'react';
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [navbarColor, setNavbarColor] = useState("");

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
    // change navbar color based on current route
    switch (location.pathname) {
      case "/":
        setNavbarColor("home");
        break;
      case "/projects":
        setNavbarColor("projects");
        break;
      case "/experience":
        setNavbarColor("experience");
        break;
      default:
        setNavbarColor("");
    }
  }, [location]);

  return (
    <div className={`navbar ${navbarColor}`} id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;