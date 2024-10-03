const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    companyName: {
      type: String,
    },
    companyLogo: {
      type: String,
    },
    location: { type: String },
    salary: { type: String },
    preference: { type: String },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
