const mongoose = require("mongoose");

// TODO: Adjust this variable URL for database handling using MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on("error", error => {
  console.error("❌ Error Connecting to MongoDB:", error);
});

db.once("open", () => {
  console.log("=> Connected to MongoDB");
});
