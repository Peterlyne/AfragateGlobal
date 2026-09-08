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
          setError("You are not logged in.");
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
        console.error("Failed to fetch profile:", error);

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
          <h2>Loading dashboard...</h2>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="dashboard">
          <div className="dashboard-error">
            <h2>Something went wrong</h2>
            <p>{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-welcome">
          <h1>Welcome, {user?.FullName}</h1>

          <p>
            Your gateway to jobs, scholarships, internships,
            businesses and opportunities across Africa.
          </p>
        </div>

        <div className="cards">
          <StartCard
            title="Jobs"
            value="245"
            description="Available opportunities"
          />

          <StartCard
            title="Scholarships"
            value="89"
            description="Open scholarships"
          />

          <StartCard
            title="Internships"
            value="57"
            description="Internship programmes"
          />

          <StartCard
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
              <li>New scholarships added</li>
              <li>Business directory updated</li>
              <li>NGO volunteer programme open</li>
              <li>Upcoming technology events</li>
            </ul>
          </div>
        </div>

        <div className="account-card">
          <h2>Your Account</h2>

          <div className="account-details">
            <div>
              <span>Name</span>
              <strong>{user?.FullName}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{user?.email}</strong>
            </div>

            <div>
              <span>Account Type</span>
              <strong>{user?.accountType}</strong>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;