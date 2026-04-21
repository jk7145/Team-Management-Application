const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
    bio: { type: String, default: "" },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);
