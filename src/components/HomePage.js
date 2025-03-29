import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Job Portal</h1>
      <p>Find your dream job here!</p>
      <Link to="/jobs">
        <button>View Job Listings</button>
      </Link>
    </div>
  );
}
