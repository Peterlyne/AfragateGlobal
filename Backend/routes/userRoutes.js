const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/userControllers");

const User = require("../models/User");
const protect = require("../middleware/authMiddleware");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Protected profile route
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;