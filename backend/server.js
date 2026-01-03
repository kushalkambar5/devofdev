const express = require('express');
const session = require("express-session");
require("dotenv").config();
const db = require('./db');
const cors = require('cors');

const app = express();


// ---------- Middleware ----------
app.use(express.json());
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET || "devofdev_secret_key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: "strict",
    secure: false,          // set TRUE when you host with HTTPS
    maxAge: 1000 * 60 * 60  // 1 hr
  }
}));

// ---------- Routes ----------
const signupLoginRoutes = require("./routes/signupLogin");
const users = require('./routes/users');

app.use('/users', users);
app.use('/', signupLoginRoutes);

// ---------- Root ----------
app.get('/', (req, res) => {
  res.send('DevofDev Backend Running');
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
