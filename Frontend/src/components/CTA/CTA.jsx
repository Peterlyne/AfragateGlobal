import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-overlay">
        <div className="cta-content">

          <h2>Ready to Unlock Global Opportunities?</h2>

          <p>
            Join thousands of students, professionals and entrepreneurs
            discovering jobs, scholarships, internships and business
            opportunities through AfraGate Global.
          </p>

          <div className="cta-buttons">

            <Link to="/register" className="cta-btn primary">
              Get Started
            </Link>

            <Link to="/jobs" className="cta-btn secondary">
              Explore Opportunities
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;