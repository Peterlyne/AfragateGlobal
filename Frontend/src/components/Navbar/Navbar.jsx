import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          AfraGate <span>Global</span>
        </Link>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/jobs" onClick={() => setMenuOpen(false)}>
            Jobs
          </NavLink>

          <NavLink to="/scholarships" onClick={() => setMenuOpen(false)}>
            Scholarships
          </NavLink>

          <NavLink to="/internships" onClick={() => setMenuOpen(false)}>
            Internships
          </NavLink>

          <NavLink to="/businesses" onClick={() => setMenuOpen(false)}>
            Businesses
          </NavLink>

          <NavLink to="/ngos" onClick={() => setMenuOpen(false)}>
            NGOs
          </NavLink>

          <NavLink to="/resources" onClick={() => setMenuOpen(false)}>
            Resources
          </NavLink>

          <NavLink to="/events" onClick={() => setMenuOpen(false)}>
            Events
          </NavLink>

          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>

          <NavLink to="/register" className="register-btn">
            Register
          </NavLink>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;