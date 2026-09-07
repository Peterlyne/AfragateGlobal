import "./Resources.css";

function Resources() {
  const resources = [
    {
      id: 1,
      title: "Professional CV Template",
      category: "Resume",
      description:
        "Download a modern ATS-friendly CV template to increase your chances of getting hired.",
    },
    {
      id: 2,
      title: "Interview Preparation Guide",
      category: "Career",
      description:
        "Learn how to answer common interview questions and impress recruiters.",
    },
    {
      id: 3,
      title: "Career Development eBook",
      category: "Guide",
      description:
        "Build essential skills for career growth and professional success.",
    },
    {
      id: 4,
      title: "Free Online Courses",
      category: "Learning",
      description:
        "Discover free courses from top universities and online learning platforms.",
    },
    {
      id: 5,
      title: "Scholarship Application Tips",
      category: "Education",
      description:
        "Improve your scholarship applications with expert advice and examples.",
    },
    {
      id: 6,
      title: "Business Startup Guide",
      category: "Business",
      description:
        "Learn how to start, manage and grow a successful business.",
    },
  ];

  return (
    <section className="resources">

      <div className="resources-header">

        <h1>Learning Resources</h1>

        <p>
          Access free guides, templates, courses and career resources to help
          you succeed.
        </p>

      </div>

      <div className="resource-search">

        <input
          type="text"
          placeholder="Search resources..."
        />

        <button>Search</button>

      </div>

      <div className="resources-grid">

        {resources.map((resource) => (

          <div className="resource-card" key={resource.id}>

            <span>{resource.category}</span>

            <h2>{resource.title}</h2>

            <p>{resource.description}</p>

            <button>Read More</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Resources;