const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Member = require("../models/Member");

const router = express.Router();

const uploadsDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, role, email, contact, bio } = req.body;

    if (!name || !role || !email || !contact || !req.file) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const member = await Member.create({
      name,
      role,
      email,
      contact,
      bio: bio || "",
      image: req.file.filename,
    });

    return res.status(201).json(member);
  } catch (error) {
    return res.status(500).json({ message: "Failed to add member", error: error.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    return res.json(members);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch members", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    return res.json(member);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch member", error: error.message });
  }
});

module.exports = router;
