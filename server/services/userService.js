const User = require("../models/userModel.js");

const getUser = async (userName) => {
  try {
    console.log("username", userName);
    const user = await User.findOne({ userName });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Unable to retrieve users");
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Invalid user ID");
  }
};

const updateUser = async (id, userData) => {
  try {
    const { password, ...fieldsToUpdate } = userData;

    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    const updatedUserData = { ...user.toObject(), ...fieldsToUpdate };

    const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, {
      new: true,
    });
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return updatedUser;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

const deleteUser = async (userName) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userName);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return deletedUser;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

module.exports = {
  getUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
