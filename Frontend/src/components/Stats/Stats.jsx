import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "10,000+",
      title: "Opportunities",
    },
    {
      number: "54",
      title: "Countries",
    },
    {
      number: "500+",
      title: "Partners",
    },
    {
      number: "25,000+",
      title: "Active Users",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;