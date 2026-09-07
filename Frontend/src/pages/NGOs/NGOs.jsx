import "./NGOs.css";

function NGOs() {
  const ngos = [
    {
      id: 1,
      name: "UNICEF",
      category: "Children",
      country: "Global",
      mission: "Protecting children's rights and improving their well-being.",
    },
    {
      id: 2,
      name: "Red Cross",
      category: "Humanitarian",
      country: "Worldwide",
      mission: "Providing emergency assistance and disaster relief.",
    },
    {
      id: 3,
      name: "Amref Health Africa",
      category: "Healthcare",
      country: "Kenya",
      mission: "Strengthening health systems across Africa.",
    },
    {
      id: 4,
      name: "WWF",
      category: "Environment",
      country: "Global",
      mission: "Conserving nature and reducing environmental threats.",
    },
    {
      id: 5,
      name: "Save the Children",
      category: "Education",
      country: "Worldwide",
      mission: "Ensuring every child has a healthy start and quality education.",
    },
    {
      id: 6,
      name: "World Vision",
      category: "Community Development",
      country: "Global",
      mission: "Improving the lives of vulnerable children and families.",
    },
  ];

  return (
    <section className="ngos">

      <div className="ngo-header">
        <h1>NGOs</h1>

        <p>
          Explore trusted non-governmental organizations making a
          difference across Africa and the world.
        </p>
      </div>

      <div className="ngo-search">
        <input
          type="text"
          placeholder="Search NGOs..."
        />

        <button>Search</button>
      </div>

      <div className="ngo-grid">

        {ngos.map((ngo) => (

          <div className="ngo-card" key={ngo.id}>

            <h2>{ngo.name}</h2>

            <span>{ngo.category}</span>

            <h4>{ngo.country}</h4>

            <p>{ngo.mission}</p>

            <button>View NGO</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default NGOs;