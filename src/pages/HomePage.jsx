import JobListings from "../components/JobListings";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      try {
        // const url = "/api/jobs";
        console.log(apiUrl);
        const res = await fetch(`${apiUrl}/jobs`);
        // const res = await fetch(
        //   "https://w7-cm-backend-auth.onrender.com/api/jobs/"
        // );
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        setJobs(data);
        console.log("Jobs fetched:", data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="home">
      {jobs.length !== 0 ? <JobListings jobs={jobs} /> : <p>No jobs found</p>}
    </div>
  );
};

export default Home;
