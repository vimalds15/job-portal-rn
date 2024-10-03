const Company = require("../models/companyModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllCompany = async () => {
  try {
    const companies = await Company.find();
    return companies;
  } catch (error) {
    throw new Error("Unable to retrieve users");
  }
};

const getUnverifiedCompanies = async () => {
  try {
    const unverifiedCompanies = await Company.find({
      $or: [{ isVerified: "Pending" }, { isVerified: { $exists: false } }],
    });
    return unverifiedCompanies;
  } catch (error) {
    throw new Error("Unable to retrieve unverified companies");
  }
};

const registerCompany = async (companyData) => {
  const { userName, password } = companyData;

  const companyExists = await Company.findOne({ userName });
  if (companyExists) {
    throw new Error("Company already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newCompany = new Company({
    ...companyData,
    password: hashedPassword,
  });

  return await newCompany.save();
};

const loginCompany = async ({ userName, password }) => {
  const company = await Company.findOne({ userName });
  if (!company) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatch = await bcrypt.compare(password, company.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

const updateCompany = async (companyId, updatedData) => {
  const updatedCompany = await Company.findByIdAndUpdate(
    companyId,
    updatedData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedCompany) {
    throw new Error("Company not found");
  }

  return updatedCompany;
};

module.exports = {
  registerCompany,
  loginCompany,
  updateCompany,
  getAllCompany,
  getUnverifiedCompanies,
};
