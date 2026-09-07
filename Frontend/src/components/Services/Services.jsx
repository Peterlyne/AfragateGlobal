import "./Services.css";

function Services() {
  const services = [
    {
      title: "Job Listings",
      description:
        "Browse verified jobs from employers across Africa and around the world.",
    },
    {
      title: "Scholarships",
      description:
        "Discover undergraduate, postgraduate, and fully funded scholarships.",
    },
    {
      title: "Internships",
      description:
        "Gain practical experience through internships with leading organizations.",
    },
    {
      title: "Business Directory",
      description:
        "Connect with businesses, startups, and entrepreneurs seeking talent.",
    },
    {
      title: "NGO Opportunities",
      description:
        "Explore volunteer, fellowship, and career opportunities from NGOs.",
    },
    {
      title: "Learning Resources",
      description:
        "Access career guides, interview tips, and educational resources.",
    },
    {
      title: "Events",
      description:
        "Stay informed about conferences, workshops, and networking events.",
    },
    {
      title: "Career Support",
      description:
        "Receive professional guidance to help you grow your career.",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide everything you need to discover opportunities,
            connect with organizations, and grow your career.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;