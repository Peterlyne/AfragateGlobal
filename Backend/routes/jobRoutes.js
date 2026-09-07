const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  getJobById,
} = require("../controllers/jobController");

const protect = require("../middleware/authMiddleware");

router.get("/", getJobs);

router.get("/:id", getJobById);

router.post("/", protect, createJob);

module.exports = router;