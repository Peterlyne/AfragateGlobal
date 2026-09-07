const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract", "Remote"],
      required: true,
    },
    salary: {
      type: String,
    },
    requirements: {
      type: [String],
      default: [],
    },
    applicationUrl: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);