import "./Blog.css";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "10 Tips for Landing Your Dream Job",
      category: "Career",
      author: "AfraGate Team",
      date: "July 12, 2026",
      image: "https://picsum.photos/400/250?random=1",
      description:
        "Learn practical strategies to stand out in the job market and impress recruiters.",
    },
    {
      id: 2,
      title: "How to Win Fully Funded Scholarships",
      category: "Education",
      author: "AfraGate Team",
      date: "July 10, 2026",
      image: "https://picsum.photos/400/250?random=2",
      description:
        "Discover the secrets behind successful scholarship applications.",
    },
    {
      id: 3,
      title: "Top African Startups Hiring in 2026",
      category: "Business",
      author: "AfraGate Team",
      date: "July 8, 2026",
      image: "https://picsum.photos/400/250?random=3",
      description:
        "Explore innovative companies creating exciting career opportunities.",
    },
    {
      id: 4,
      title: "Preparing for Your First Interview",
      category: "Career",
      author: "AfraGate Team",
      date: "July 5, 2026",
      image: "https://picsum.photos/400/250?random=4",
      description:
        "Simple interview techniques that will boost your confidence.",
    },
    {
      id: 5,
      title: "Best Free Online Courses in 2026",
      category: "Learning",
      author: "AfraGate Team",
      date: "July 2, 2026",
      image: "https://picsum.photos/400/250?random=5",
      description:
        "Upgrade your skills with these highly rated free courses.",
    },
    {
      id: 6,
      title: "Building a Successful Career in Tech",
      category: "Technology",
      author: "AfraGate Team",
      date: "June 30, 2026",
      image: "https://picsum.photos/400/250?random=6",
      description:
        "A roadmap for students and graduates interested in technology careers.",
    },
  ];

  return (
    <section className="blog">

      <div className="blog-header">
        <h1>AfraGate Blog</h1>

        <p>
          Career advice, scholarships, internships, business insights,
          technology and educational resources.
        </p>
      </div>

      <div className="blog-search">

        <input
          type="text"
          placeholder="Search articles..."
        />

        <button>Search</button>

      </div>

      <div className="blog-grid">

        {blogs.map((blog) => (

          <div className="blog-card" key={blog.id}>

            <img
              src={blog.image}
              alt={blog.title}
            />

            <div className="blog-content">

              <span>{blog.category}</span>

              <h2>{blog.title}</h2>

              <small>
                {blog.author} • {blog.date}
              </small>

              <p>{blog.description}</p>

              <button>Read More</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Blog;