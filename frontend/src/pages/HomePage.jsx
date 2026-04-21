import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="card">
      <h1>Student Team Members Management</h1>
      <p>Welcome to our team portal. Use the links below to manage and view members.</p>
      <div className="actions">
        <Link className="btn" to="/add-member">
          Add Member
        </Link>
        <Link className="btn btn-secondary" to="/members">
          View Members
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
