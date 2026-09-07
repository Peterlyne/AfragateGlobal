import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import StartCard from "../../components/StartCard/StartCard";
import api from "../../services/api";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Authentication required.");
          setLoading(false);
          return;
        }

        const response = await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        setError(
          error.response?.data?.message ||
          "Unable to load your profile."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="dashboard">
          <p>Loading dashboard...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="dashboard">

        <h1>Welcome, {user?.FullName}</h1>

        <p>
          Your gateway to jobs, scholarships, internships and
          business opportunities across Africa.
        </p>

        <div className="cards">

          <StatCard
            title="Jobs"
            value="245"
            description="Available opportunities"
          />

          <StatCard
            title="Scholarships"
            value="89"
            description="Open scholarships"
          />

          <StatCard
            title="Internships"
            value="57"
            description="Internship programmes"
          />

          <StatCard
            title="Businesses"
            value="420"
            description="Registered businesses"
          />

        </div>

        <div className="recent-section">

          <div className="recent-card">
            <h2>Latest Opportunities</h2>

            <ul>
              <li>Google Software Engineering Internship</li>
              <li>UNDP Graduate Programme</li>
              <li>African Union Scholarship</li>
              <li>Safaricom Internship Programme</li>
            </ul>
          </div>

          <div className="recent-card">
            <h2>Announcements</h2>

            <ul>
              <li>New Scholarships Added</li>
              <li>Business Directory Updated</li>
              <li>NGO Volunteer Programme Open</li>
              <li>Upcoming Events</li>
            </ul>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;
