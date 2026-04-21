import { useState } from "react";
import api from "../api";

const initialState = {
  name: "",
  role: "",
  email: "",
  contact: "",
  bio: "",
};

function AddMemberPage() {
  const [form, setForm] = useState(initialState);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!form.name || !form.role || !form.email || !form.contact || !image) {
      setMessage("Please fill all required fields and upload an image.");
      return;
    }

    try {
      setLoading(true);
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      payload.append("image", image);

      await api.post("/members", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Member added successfully.");
      setForm(initialState);
      setImage(null);
      event.target.reset();
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to add member.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Add Team Member</h2>
      <form className="form" onSubmit={onSubmit}>
        <input name="name" placeholder="Full Name" onChange={onChange} required />
        <input name="role" placeholder="Role" onChange={onChange} required />
        <input name="email" type="email" placeholder="Email" onChange={onChange} required />
        <input name="contact" placeholder="Contact Number" onChange={onChange} required />
        <textarea name="bio" placeholder="Short Bio" onChange={onChange} rows="4" />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          required
        />
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default AddMemberPage;
