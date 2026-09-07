import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">

        <h2>Stay Updated</h2>

        <p>
          Subscribe to receive the latest jobs, scholarships,
          internships, events and career resources directly in
          your inbox.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}

export default Newsletter;