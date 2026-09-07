import "./Services.css";

function Services() {
  const services = [
    {
      title: "Job Listings",
      description:
        "Browse verified jobs from employers across Africa and around the world.",
      icon: "💼",
    },
    {
      title: "Scholarships",
      description:
        "Discover undergraduate, postgraduate and fully funded scholarships.",
      icon: "🎓",
    },
    {
      title: "Internships",
      description:
        "Gain practical experience through internships with top organizations.",
      icon: "📚",
    },
    {
      title: "Business Directory",
      description:
        "Connect with businesses, startups and entrepreneurs seeking talent.",
      icon: "🏢",
    },
    {
      title: "NGO Opportunities",
      description:
        "Explore volunteer, fellowship and career opportunities from NGOs.",
      icon: "🤝",
    },
    {
      title: "Learning Resources",
      description:
        "Access career guides, interview tips and educational resources.",
      icon: "📖",
    },
    {
      title: "Events",
      description:
        "Stay informed about conferences, workshops and networking events.",
      icon: "📅",
    },
    {
      title: "Career Support",
      description:
        "Receive professional guidance to help you grow your career.",
      icon: "🚀",
    },
  ];

  return (
    <section className="services">
      <div className="container">

        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide everything you need to discover opportunities,
            connect with organizations and grow your career.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

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