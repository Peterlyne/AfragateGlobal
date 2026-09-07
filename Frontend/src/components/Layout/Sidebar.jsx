import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="logo">AfraGate</h2>

      <nav>

        <Link to="/dashboard"> Dashboard</Link>

        <Link to="/jobs">Jobs</Link>

        <Link to="/scholarships"> Scholarships</Link>

        <Link to="/internships"> Internships</Link>

        <Link to="/businesses"> Businesses</Link>

        <Link to="/ngos"> NGOs</Link>

        <Link to="/resources"> Resources</Link>

        <Link to="/events"> Events</Link>

        <Link to="/profile"> Profile</Link>

        <Link to="/"> Logout</Link>

      </nav>

    </aside>
  );
}

export default Sidebar;