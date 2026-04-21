import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { API_BASE_URL } from "../config";

function ViewMembersPage() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const response = await api.get("/members");
        setMembers(response.data);
      } catch (_error) {
        setError("Failed to fetch members");
      }
    };

    loadMembers();
  }, []);

  return (
    <div className="card">
      <h2>All Team Members</h2>
      {error && <p className="message">{error}</p>}
      <div className="member-grid">
        {members.map((member) => (
          <div key={member._id} className="member-card">
            <img src={`${API_BASE_URL}/uploads/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link className="btn btn-small" to={`/members/${member._id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembersPage;
