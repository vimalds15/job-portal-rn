const express = require("express");
const {
  register,
  login,
  updateProfile,
  getAllCompanies,
  getUnverifiedCompany,
} = require("../controllers/companyController.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update/:id", updateProfile);
router.get("/", getAllCompanies);
router.get("/request", getUnverifiedCompany);

module.exports = router;
