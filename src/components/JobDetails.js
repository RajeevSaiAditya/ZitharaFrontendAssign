import { useParams } from "react-router-dom";

const jobListings = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Remote", description: "Develop amazing UIs using React.js." },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "USA", description: "Work on scalable backend services." },
  { id: 3, title: "Full Stack Developer", company: "Microsoft", location: "India", description: "Build end-to-end web applications." },
];

export default function JobDetails() {
  const { id } = useParams();
  const job = jobListings.find((job) => job.id === parseInt(id));

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <h3>{job.company} - {job.location}</h3>
      <p>{job.description}</p>
    </div>
  );
}
