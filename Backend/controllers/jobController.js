const Job = require("../models/Job");

const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      description,
      location,
      jobType,
      salary,
      requirements,
      applicationUrl,
      deadline,
    } = req.body;

    const job = await Job.create({
      title,
      company,
      description,
      location,
      jobType,
      salary,
      requirements,
      applicationUrl,
      deadline,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
};