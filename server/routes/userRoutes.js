const express = require("express");
const {
  getUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.get("/:userName", getUser);

router.get("/", getAllUsers);

router.get("/id/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
