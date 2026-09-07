import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Send us your questions,
          suggestions or partnership inquiries.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <div className="info-box">
            <h3> Address</h3>
            <p>Nairobi, Kenya</p>
          </div>

          <div className="info-box">
            <h3> Phone</h3>
            <p>+254 757 919 31 </p>
          </div>

          <div className="info-box">
            <h3> Email</h3>
            <p>info@afragateglobal.com</p>
          </div>

          <div className="info-box">
            <h3> Working Hours</h3>
            <p>Monday - Friday</p>
            <p>8:00 AM - 5:00 PM</p>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send a Message</h2>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;