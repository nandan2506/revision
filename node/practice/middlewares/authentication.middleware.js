const jwt = require("jsonwebtoken");
require("dotenv").config();
const key = process.env.key;

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, key, (err, payload) => {
      if (err) {
        console.error("Error verifying token", err);
        return res.status(401).json({ message: "Invalid token" });
      }

      req.user = payload; 
      next();
    });
  } catch (error) {
    console.error("Error during token verification", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = auth;
