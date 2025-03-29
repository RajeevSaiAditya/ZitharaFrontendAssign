import { useState } from "react";
import { Link } from "react-router-dom";

const jobListings = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Remote" },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "USA" },
  { id: 3, title: "Full Stack Developer", company: "Microsoft", location: "India" },
];

export default function JobListings() {
  return (
    <div className="container">
      <h1>Job Listings</h1>
      {jobListings.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>
          <p>{job.company} - {job.location}</p>
          <Link to={`/job/${job.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
