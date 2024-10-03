const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, unique: true },
    userName: { type: String, unique: true },
    companyLogo: { type: String },
    landline: { type: String },
    about: { type: String },
    industryType: { type: String },
    description: { type: String },
    website: { type: String },
    password: { type: String },
    license: { type: String },
    isVerified: {
      type: String,
      enum: ["Accepted", "Rejected", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
