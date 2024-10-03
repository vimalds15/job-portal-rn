const Auth = require("../models/authModel.js");
const User = require("../models/userModel.js");
const Company = require("../models/companyModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (userName, password) => {
  const auth = await Auth.findOne({ userName });

  if (!auth) {
    throw new Error("Invalid username or password");
  }

  const isPasswordValid = await bcrypt.compare(password, auth.password);
  if (!isPasswordValid) {
    throw new Error("Invalid username or password");
  }

  let details;
  if (auth.role === "user" || auth.role === "admin") {
    details = await User.findOne({ userName });
  } else if (auth.role === "company") {
    details = await Company.findOne({ userName });
  }

  const token = jwt.sign(
    { id: auth._id, role: auth.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return { token, details, role: auth.role };
};

const registerUser = async (userData) => {
  const { userName, email = "", password, role } = userData;

  console.log(userName, email, password, role);

  const hashedPassword = await bcrypt.hash(password, 10);

  const auth = new Auth({
    userName,
    email: email,
    password: hashedPassword,
    role,
  });

  await auth.save();

  if (role === "user" || role === "admin") {
    const user = new User({
      userName,
      email,
      role,
    });
    await user.save();
  } else if (role === "company") {
    const { companyLogo, contactNumber, companyName } = userData;
    console.log(companyLogo, companyName, contactNumber);
    const company = new Company({
      userName,
      companyLogo,
      companyName,
      landline: contactNumber,
      role,
    });
    await company.save();
  }

  return auth;
};

module.exports = { loginUser, registerUser };
