const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "company", "admin"],
      required: true,
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;

