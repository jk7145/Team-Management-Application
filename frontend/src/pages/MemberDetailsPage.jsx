import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import { API_BASE_URL } from "../config";

function MemberDetailsPage() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMember = async () => {
      try {
        const response = await api.get(`/members/${id}`);
        setMember(response.data);
      } catch (_error) {
        setError("Failed to fetch member details");
      }
    };

    loadMember();
  }, [id]);

  if (error) {
    return (
      <div className="card">
        <p className="message">{error}</p>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="card">
        <p>Loading member details...</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Member Details</h2>
      <img className="details-image" src={`${API_BASE_URL}/uploads/${member.image}`} alt={member.name} />
      <p>
        <strong>Name:</strong> {member.name}
      </p>
      <p>
        <strong>Role:</strong> {member.role}
      </p>
      <p>
        <strong>Email:</strong> {member.email}
      </p>
      <p>
        <strong>Contact:</strong> {member.contact}
      </p>
      <p>
        <strong>Bio:</strong> {member.bio || "No bio provided"}
      </p>
      <Link className="btn btn-small" to="/members">
        Back to Members
      </Link>
    </div>
  );
}

export default MemberDetailsPage;
