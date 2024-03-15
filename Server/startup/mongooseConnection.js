"use strict"

const mongoose = require("mongoose");
console.log(process.env.MONGODB_URI);
console.log("🚀 ~ process.env.MONGODB_URI:", process.env.MONGODB_URI)
const mongooseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");

  } catch (error) {
    console.log("db not connected");
    throw new Error("db connection is failed");
  }
};

module.exports = { mongooseConnection };

