const jwt = require("jsonwebtoken");
const Company = require("../models/companyModel.js");

const companyMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const company = await Company.findById(decoded.id);

    if (!company) {
      throw new Error();
    }

    req.user = company;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = companyMiddleware;
