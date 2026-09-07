import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <h1>
            Africa To <br />
            Global Opportunities
          </h1>

          <p>
            Discover jobs, scholarships, internships, businesses,
            NGOs and opportunities across Africa and beyond.
            Start your journey today with AfraGate Global.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Opportunities
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;