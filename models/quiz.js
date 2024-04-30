const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Failed to connect MongoDB", err);
  });

const userSchema = mongoose.Schema({
  ques: {
    type: String,
  },
  opt1: {
    type: String,
  },
  opt2: {
    type: String,
  },
  opt3: {
    type: String,
  },
  opt4: {
    type: String,
  },
  ans: {
    type: Number,
  },
});

const node = mongoose.model("node", userSchema);
const mongo = mongoose.model("mongo", userSchema);
const sql = mongoose.model("sql", userSchema);


const LoginSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  timeStamps: [
    {
      time: Date,
      score: Number
    }
  ]
});

const login = mongoose.model("login", LoginSchema);

module.exports = { node, mongo, sql, login }
