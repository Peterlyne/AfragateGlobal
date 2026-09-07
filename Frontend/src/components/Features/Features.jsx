import "./Features.css";

function Features() {
  const features = [
    {
      title: "Jobs",
      description: "Find verified job opportunities from companies across Africa and beyond.",
      
    },
    {
      title: "Scholarships",
      description: "Access fully funded and partial scholarships from top institutions.",
      
    },
    {
      title: "Internships",
      description: "Gain valuable experience through internship opportunities worldwide.",
      
    },
    {
      title: "Businesses",
      description: "Discover businesses, startups, and entrepreneurs looking for talent.",
      
    },
  ];

  return (
    <section className="features">
      <div className="container">

        <h2>Explore Opportunities</h2>
        <p className="section-text">
          Everything you need to build your future in one place.
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <button>Explore</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;