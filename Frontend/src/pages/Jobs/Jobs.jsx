import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs");

        setJobs(response.data.jobs || response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);

        setError(
          error.response?.data?.message ||
            "Unable to load jobs at the moment."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="jobs-page">
      <div className="container">

        <div className="jobs-header">
          <h1>Job Opportunities</h1>

          <p>
            Discover job opportunities from organizations across
            Africa and around the world.
          </p>
        </div>

        {loading && (
          <p className="jobs-message">
            Loading jobs...
          </p>
        )}

        {error && (
          <p className="jobs-error">
            {error}
          </p>
        )}

        {!loading && !error && jobs.length === 0 && (
          <p className="jobs-message">
            No jobs are currently available.
          </p>
        )}

        <div className="jobs-grid">
          {jobs.map((job) => (
            <div className="job-card" key={job._id}>

              <h2>{job.title}</h2>

              <h3>{job.company}</h3>

              <p>{job.description}</p>

              <div className="job-details">

                <span>
                  Location: {job.location}
                </span>

                <span>
                  Job Type: {job.jobType}
                </span>

                {job.salary && (
                  <span>
                    Salary: {job.salary}
                  </span>
                )}

              </div>

              {job.applicationUrl && (
                <a
                  href={job.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-button"
                >
                  Apply Now
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Jobs;