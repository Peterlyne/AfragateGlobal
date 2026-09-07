import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>AfraGate Global</h2>

          <p>
            Connecting Africa to global opportunities through jobs,
            scholarships, internships, businesses, NGOs and educational
            resources.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/scholarships">Scholarships</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/businesses">Businesses</Link>
        </div>

        <div className="footer-links">
          <h3>Company</h3>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/events">Events</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: info@afragateglobal.com</p>
          <p>Phone: +254 757 919 131</p>
          <p>Nairobi, Kenya</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 AfraGate Global. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;