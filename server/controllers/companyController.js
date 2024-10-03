const {
  registerCompany,
  loginCompany,
  updateCompany,
  getAllCompany,
  getUnverifiedCompanies,
} = require("../services/companyService.js");

const getAllCompanies = async (req, res) => {
  try {
    const companies = await getAllCompany();
    res.status(200).json({ success: true, companies });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUnverifiedCompany = async (req, res) => {
  try {
    const companies = await getUnverifiedCompanies();
    res.status(200).json({ success: true, companies });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const newCompany = await registerCompany(req.body);
    res.status(201).json({
      success: true,
      message: "Company registered successfully",
      data: newCompany,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const token = await loginCompany(req.body);
    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const companyId = req.params.id;
    const updatedData = req.body;

    const updatedCompany = await updateCompany(companyId, updatedData);

    res.status(200).json({
      success: true,
      message: "Company profile updated successfully",
      data: updatedCompany,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  register,
  login,
  updateProfile,
  getAllCompanies,
  getUnverifiedCompany,
};
