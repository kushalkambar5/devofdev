const mongoose = require("mongoose");
require("dotenv").config();

const mongoDbUrl = process.env.MONGODBURL;

if(!mongoDbUrl){
  console.error("MONGODBURL not found in .env");
  process.exit(1);
}

mongoose.connect(mongoDbUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
