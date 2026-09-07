import "./Scholarships.css";

function Scholarships() {
  const scholarships = [
    {
      id: 1,
      title: "Mastercard Foundation Scholarship",
      university: "University of Cape Town",
      country: "South Africa",
      type: "Fully Funded",
    },
    {
      id: 2,
      title: "Chevening Scholarship",
      university: "UK Universities",
      country: "United Kingdom",
      type: "Fully Funded",
    },
    {
      id: 3,
      title: "DAAD Scholarship",
      university: "German Universities",
      country: "Germany",
      type: "Fully Funded",
    },
    {
      id: 4,
      title: "Commonwealth Scholarship",
      university: "Commonwealth Universities",
      country: "Various",
      type: "Partial Funding",
    },
  ];

  return (
    <section className="scholarships">
      <div className="scholarship-header">
        <h1>Scholarships</h1>
        <p>
          Discover scholarships from universities and organizations around the
          world.
        </p>
      </div>

      <div className="scholarship-search">
        <input
          type="text"
          placeholder="Search scholarships..."
        />
        <button>Search</button>
      </div>

      <div className="scholarship-grid">
        {scholarships.map((item) => (
          <div className="scholarship-card" key={item.id}>
            <h2>{item.title}</h2>

            <h4>{item.university}</h4>

            <p>{item.country}</p>

            <span>{item.type}</span>

            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Scholarships;