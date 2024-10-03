const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    userName: { type: String, unique: true },
    age: { type: String },
    course: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    skills: { type: String },
    tenthMarks: { type: String },
    twelfthMarks: { type: String },
    college: { type: String },
    collegeMarks: { type: String },
    resume: { type: String },
    profileImage: { type: String },
    password: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
