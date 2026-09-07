import "./Internships.css";

function Internships() {
  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "Remote",
      duration: "3 Months",
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "UNICEF",
      location: "Nairobi, Kenya",
      duration: "6 Months",
    },
    {
      id: 3,
      title: "Finance Intern",
      company: "World Bank",
      location: "Washington, USA",
      duration: "4 Months",
    },
    {
      id: 4,
      title: "Graphic Design Intern",
      company: "Canva",
      location: "Remote",
      duration: "3 Months",
    },
  ];

  return (
    <section className="internships">

      <div className="internship-header">
        <h1>Internships</h1>

        <p>
          Build your experience through internship opportunities
          from leading organizations around the world.
        </p>
      </div>

      <div className="internship-search">

        <input
          type="text"
          placeholder="Search internships..."
        />

        <button>Search</button>

      </div>

      <div className="internship-grid">

        {internships.map((internship) => (

          <div className="internship-card" key={internship.id}>

            <h2>{internship.title}</h2>

            <h4>{internship.company}</h4>

            <p>{internship.location}</p>

            <span>{internship.duration}</span>

            <button>Apply Now</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Internships;