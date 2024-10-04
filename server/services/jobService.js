const Job = require("../models/jobModel.js");

const createJob = async (jobData) => {
  const newJob = new Job(jobData);
  return await newJob.save();
};

const getAllJobs = async () => {
  const jobs = await Job.find()
    .populate({
      path: "companyId",
      select: "_id companyName userName isVerified",
      match: { isVerified: "Accepted" },
    })
    .sort({ createdAt: -1 });
  return jobs.filter((job) => job.companyId !== null);
};

const getJobById = async (jobId) => {
  const job = await Job.findById(jobId).populate(
    "companyId",
    "companyName userName"
  );
  if (!job) {
    throw new Error("Job not found");
  }
  return job;
};

const getJobsByCompany = async (companyId) => {
  const job = await Job.find({ companyId })
    .populate("companyId", "companyName userName")
    .sort({ createdAt: -1 });
  if (!job) {
    throw new Error("Job not found");
  }
  return job;
};

const updateJob = async (jobId, updatedData) => {
  const updatedJob = await Job.findByIdAndUpdate(jobId, updatedData, {
    new: true,
    runValidators: true,
  });

  if (!updatedJob) {
    throw new Error("Job not found");
  }

  return updatedJob;
};

const deleteJob = async (jobId) => {
  const deletedJob = await Job.findByIdAndDelete(jobId);

  if (!deletedJob) {
    throw new Error("Job not found");
  }

  return deletedJob;
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getJobsByCompany,
};
