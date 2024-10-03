const express = require("express");
const {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getAllApplicationsUser,
  getAllApplicationsCompany,
} = require("../controllers/applicationController.js");

const router = express.Router();

router.post("/", createApplication);
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);
router.get("/user/:id", getAllApplicationsUser);
router.get("/company/:id", getAllApplicationsCompany);

module.exports = router;
