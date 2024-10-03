const Application = require("../models/applicationModel.js");

// Create a new application
const createApplication = async (applicationData) => {
  try {
    const newApplication = new Application(applicationData);
    await newApplication.save();
    return newApplication;
  } catch (error) {
    throw new Error("Failed to create application");
  }
};

// Get all applications
const getAllApplications = async () => {
  try {
    const applications = await Application.find();
    return applications;
  } catch (error) {
    throw new Error("Unable to fetch applications");
  }
};

const getAllApplicationsUser = async (userId) => {
  try {
    const applications = await Application.find({ userId });
    return applications;
  } catch (error) {
    throw new Error("Unable to fetch applications");
  }
};
const getAllApplicationsCompany = async (companyUserName) => {
  try {
    const applications = await Application.find({ companyUserName }).populate({
      path: "userId",
      select: "email fullName",
    });
    console.log("applications", applications, companyUserName);
    return applications;
  } catch (error) {
    throw new Error("Unable to fetch applications");
  }
};

// Get an application by ID
const getApplicationById = async (id) => {
  try {
    const application = await Application.findById(id)
      .populate("userName", "userName")
      .populate("jobId", "jobTitle")
      .populate("companyUserName", "companyName");
    if (!application) throw new Error("Application not found");
    return application;
  } catch (error) {
    throw new Error("Failed to get application");
  }
};

// Update an application by ID
const updateApplication = async (id, applicationData) => {
  try {
    console.log("id",id,applicationData)
    const application = await Application.findById(id);
    if (!application) {
      throw new Error("Application not found");
    }

    const updatedApplicationData = {
      ...application.toObject(),
      ...applicationData,
    };
    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      updatedApplicationData,
      { new: true }
    );
    return updatedApplication;
  } catch (error) {
    throw new Error("Failed to update application");
  }
};

// Delete an application by ID
const deleteApplication = async (id) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(id);
    if (!deletedApplication) throw new Error("Application not found");
    return deletedApplication;
  } catch (error) {
    throw new Error("Failed to delete application");
  }
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getAllApplicationsUser,
  getAllApplicationsCompany,
};
