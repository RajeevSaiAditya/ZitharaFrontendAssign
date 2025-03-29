import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

import JobListings from "./components/JobListings";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
