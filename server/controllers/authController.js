const { registerUser, loginUser } = require("../services/authService.js");

const register = async (req, res) => {
  try {
    console.log("check", req.body);
    const user = await registerUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const token = await loginUser(userName, password);
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

module.exports = { register, login };
