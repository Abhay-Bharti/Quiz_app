const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quiz')
    .then(() => { console.log("MongoDB Connected") })
    .catch((err) => { console.log("Failed to connect MongoDB", err) });

const userSchema = mongoose.Schema({
    ques:{
        type: String
    },
    opt1:{
        type: String
    },
    opt2: {
        type: String
    },
    opt3: {
        type: String
    },
    opt4: {
        type: String
    },
    ans: {
        type: Number
    }
});

const user = mongoose.model("user", userSchema);

module.exports = user;