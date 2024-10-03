const express = require("express");
const {
  createJob,
  getAllJobs,
  getJobById,
  updateJobById,
  removeJobById,
  getJobsByCompany,
} = require("../controllers/jobController.js");

const router = express.Router();

router.post("/create", createJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.get("/company/:id", getJobsByCompany);
router.put("/:id", updateJobById);
router.delete("/:id", removeJobById);

module.exports = router;
