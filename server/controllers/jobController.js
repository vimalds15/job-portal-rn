const jobService = require("../services/jobService");

const createJob = async (req, res) => {
  try {
    const job = await jobService.createJob(req.body);
    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);
    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getJobsByCompany = async (req, res) => {
  try {
    console.log("fladsfjals",req.params.id)
    const job = await jobService.getJobsByCompany(req.params.id);
    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateJobById = async (req, res) => {
  try {
    const job = await jobService.updateJob(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const removeJobById = async (req, res) => {
  try {
    await jobService.deleteJob(req.params.id);
    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJobById,
  removeJobById,
  getJobsByCompany
};
