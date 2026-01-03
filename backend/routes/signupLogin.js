const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('./../models/user');

// ---------- Signup ----------
router.post('/signup', async (req, res) => {
  try {
    const { name, email, username, password, role, profile, settings } = req.body;

    if (!password)
      return res.status(400).json({ error: "Password is required" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      username,
      passwordHash: hashedPassword,
      role,
      profile,
      settings
    });

    const response = await newUser.save();
    console.log("User saved");

    res.status(201).json({ message: "User created", userId: response._id });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// ---------- Login (CREATES COOKIE + SESSION) ----------
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email & password are required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch)
      return res.status(401).json({ error: "Invalid password" });

    // 🔥 SESSION CREATED HERE
    req.session.userId = user._id;

    res.status(200).json({ message: "Login successful" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// ---------- Protected Route ----------
router.get("/profile", (req, res) => {
  if (!req.session.userId)
    return res.status(401).json({ error: "Not logged in" });

  res.json({ message: "Authenticated", userId: req.session.userId });
});


// ---------- Logout ----------
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});


module.exports = router;
