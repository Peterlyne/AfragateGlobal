import "./Businesses.css";

function Businesses() {
  const businesses = [
    {
      id: 1,
      name: "Safaricom PLC",
      industry: "Telecommunications",
      location: "Nairobi, Kenya",
    },
    {
      id: 2,
      name: "Flutterwave",
      industry: "Financial Technology",
      location: "Lagos, Nigeria",
    },
    {
      id: 3,
      name: "Andela",
      industry: "Software Development",
      location: "Remote",
    },
    {
      id: 4,
      name: "Twiga Foods",
      industry: "Agribusiness",
      location: "Nairobi, Kenya",
    },
    {
      id: 5,
      name: "M-KOPA",
      industry: "FinTech",
      location: "Kenya",
    },
    {
      id: 6,
      name: "Jumia",
      industry: "E-Commerce",
      location: "Africa",
    },
  ];

  return (
    <section className="businesses">

      <div className="business-header">

        <h1>Businesses</h1>

        <p>
          Discover companies, startups and organizations creating
          opportunities across Africa.
        </p>

      </div>

      <div className="business-search">

        <input
          type="text"
          placeholder="Search businesses..."
        />

        <button>Search</button>

      </div>

      <div className="business-grid">

        {businesses.map((business) => (

          <div className="business-card" key={business.id}>

            <h2>{business.name}</h2>

            <h4>{business.industry}</h4>

            <p>{business.location}</p>

            <button>View Profile</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Businesses;