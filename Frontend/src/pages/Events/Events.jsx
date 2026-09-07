import "./Events.css";

function Events() {
  const events = [
    {
      id: 1,
      title: "Africa Tech Summit 2026",
      date: "15 March 2026",
      location: "Nairobi, Kenya",
      category: "Technology",
    },
    {
      id: 2,
      title: "Global Scholarship Expo",
      date: "10 April 2026",
      location: "Online",
      category: "Education",
    },
    {
      id: 3,
      title: "Youth Entrepreneurship Forum",
      date: "22 May 2026",
      location: "Accra, Ghana",
      category: "Business",
    },
    {
      id: 4,
      title: "Career & Internship Fair",
      date: "5 June 2026",
      location: "Kampala, Uganda",
      category: "Career",
    },
    {
      id: 5,
      title: "NGO Leadership Conference",
      date: "18 July 2026",
      location: "Kigali, Rwanda",
      category: "NGO",
    },
    {
      id: 6,
      title: "Digital Skills Bootcamp",
      date: "30 August 2026",
      location: "Remote",
      category: "Training",
    },
  ];

  return (
    <section className="events">

      <div className="events-header">
        <h1>Upcoming Events</h1>

        <p>
          Discover conferences, workshops, networking events and career fairs
          across Africa and around the world.
        </p>
      </div>

      <div className="event-search">

        <input
          type="text"
          placeholder="Search events..."
        />

        <button>Search</button>

      </div>

      <div className="events-grid">

        {events.map((event) => (

          <div className="event-card" key={event.id}>

            <span>{event.category}</span>

            <h2>{event.title}</h2>

            <p><strong>Date:</strong> {event.date}</p>

            <p><strong>Location:</strong> {event.location}</p>

            <button>Register</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Events;