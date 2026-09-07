import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-hero">
        <h1>About AfraGate Global</h1>

        <p>
          Connecting Africa to global opportunities through technology,
          innovation and trusted partnerships.
        </p>
      </div>

      <div className="about-container">

        <div className="about-section">
          <h2>Who We Are</h2>

          <p>
            AfraGate Global is a digital platform dedicated to helping
            students, graduates, professionals and entrepreneurs discover
            opportunities across Africa and beyond.
          </p>

          <p>
            Our platform connects users with jobs, scholarships,
            internships, businesses, NGOs, educational resources and
            international events in one centralized location.
          </p>
        </div>

        <div className="mission-grid">

          <div className="mission-card">
            <h3> Our Mission</h3>

            <p>
              To bridge the gap between Africa and global opportunities by
              making reliable information accessible to everyone.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>

            <p>
              To become Africa's leading digital gateway for career,
              education and business opportunities.
            </p>
          </div>

          <div className="mission-card">
            <h3> Our Values</h3>

            <ul>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Inclusivity</li>
              <li>Transparency</li>
              <li>Excellence</li>
            </ul>
          </div>

        </div>

        <div className="statistics">

          <div className="stat">
            <h2>10,000+</h2>
            <p>Opportunities</p>
          </div>

          <div className="stat">
            <h2>54</h2>
            <p>African Countries</p>
          </div>

          <div className="stat">
            <h2>500+</h2>
            <p>Partner Organizations</p>
          </div>

          <div className="stat">
            <h2>25,000+</h2>
            <p>Community Members</p>
          </div>

        </div>

        <div className="future">

          <h2>Our Future</h2>

          <p>
            We are continuously expanding our services to include
            AI-powered opportunity matching, networking, mentorship,
            online learning and career development tools for individuals
            across Africa.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;