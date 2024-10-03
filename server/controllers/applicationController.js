const applicationService = require("../services/applicationService.js");

// Create a new application
const createApplication = async (req, res) => {
  try {
    const newApplication = await applicationService.createApplication(req.body);
    res.status(201).json({ success: true, application: newApplication });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all applications
const getAllApplications = async (req, res) => {
  try {
    const applications = await applicationService.getAllApplications();
    res.status(200).json({ success: true, applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllApplicationsUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const applications = await applicationService.getAllApplicationsUser(
      userId
    );
    res.status(200).json({ success: true, applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getAllApplicationsCompany = async (req, res) => {
  try {
    const companyUserName = req.params.id;
    const applications = await applicationService.getAllApplicationsCompany(
      companyUserName
    )
    res.status(200).json({ success: true, applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get application by ID
const getApplicationById = async (req, res) => {
  try {
    const application = await applicationService.getApplicationById(
      req.params.id
    );
    res.status(200).json({ success: true, application });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// Update an application by ID
const updateApplication = async (req, res) => {
  try {
    const updatedApplication = await applicationService.updateApplication(
      req.params.id,
      req.body
    );
    res.status(200).json({ success: true, application: updatedApplication });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete an application by ID
const deleteApplication = async (req, res) => {
  try {
    await applicationService.deleteApplication(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getAllApplicationsUser,
  getAllApplicationsCompany
};
