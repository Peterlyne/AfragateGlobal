import "./WhyChoose.css";

function WhyChoose() {
  const reasons = [
    {
      title: "Verified Opportunities",
      description:
        "All jobs, scholarships, internships and opportunities are carefully reviewed before publication.",
      
    },
    {
      title: "Global Network",
      description:
        "Connect with employers, universities, NGOs and organizations from around the world.",
      
    },
    {
      title: "Easy Application",
      description:
        "Find and apply for opportunities quickly through one simple platform.",
      
    },
    {
      title: "Career Growth",
      description:
        "Access resources that help you develop your skills and build your future.",
      
    },
    {
      title: "Trusted Platform",
      description:
        "Your information is protected with secure authentication and verified listings.",
      
    },
    {
      title: "Always Updated",
      description:
        "New opportunities are added daily to help you stay ahead.",
      
    },
  ];

  return (
    <section className="whychoose">
      <div className="container">

        <div className="section-title">
          <h2>Why Choose AfraGate Global?</h2>
          <p>
            Everything you need to discover opportunities and grow your career.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;