// authController.js
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Credentials from environment (fallback to defaults)
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "ogames";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ogames123";

  try {
    // Validate credentials
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { username, role: "admin" },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      token,
      message: "Login successful",
    });
  } catch (err) {
    console.error("Auth login error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
