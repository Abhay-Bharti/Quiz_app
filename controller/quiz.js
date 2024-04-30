const { node, mongo, sql, login } = require("../models/quiz");

async function handleQuizNode(req, res) {
  try {
    const User = req.params.user.replace(':', '');
      const data = await node.find({});

      const all = data.map((item) => ({
        ques: item.ques,
        options: [item.opt1, item.opt2, item.opt3, item.opt4],
        ans: item.ans,
      }));
      // Send questions as JSON response

      res.render("quiz", { all, User, sub:"nodes" });
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

async function handleQuizMongo(req, res) {
  try {
    const User = req.params.user.replace(':', '');
      const data = await mongo.find({});

      const all = data.map((item) => ({
        ques: item.ques,
        options: [item.opt1, item.opt2, item.opt3, item.opt4],
        ans: item.ans,
      }));
      // Send questions as JSON response

      res.render("quiz", { all, User, sub:"mongos" });
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

async function handleQuizSql(req, res) {
  try {
    const User = req.params.user.replace(':', '');
      const data = await sql.find({});

      const all = data.map((item) => ({
        ques: item.ques,
        options: [item.opt1, item.opt2, item.opt3, item.opt4],
        ans: item.ans,
      }));
      // Send questions as JSON response

      res.render("quiz", { all, User, sub:"sqls" });
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

async function EvaluateAnswerNode(req, res) {
    const answers = req.body;
    const data = await node.find({});
    const all = data.map((item) => ({
      ans: item.ans,
    }));
    const userName = req.params.user.replace(':', '');
    let index = 0;
    let count = 0;
    for (let key in answers) {
      if (parseInt(answers[key]) === all[index].ans) {
        count++;
      }
      index++;
    }

    const entry = await login.findOne({ userName: userName });

    if (entry) {
      entry.timeStamps.push({ time: new Date(), score: count });
      await entry.save();

      console.log('Timestamp added successfully');
    } else {
      console.log('User not found');
    }

    const timeStamps = entry ? entry.timeStamps : [];
    res.render("home", { user: userName, timeStamps });
  }

async function EvaluateAnswerMongo(req, res) {
    const answers = req.body;
    const data = await mongo.find({});
    const all = data.map((item) => ({
      ans: item.ans,
    }));
    const userName = req.params.user.replace(':', '');
    let index = 0;
    let count = 0;
    for (let key in answers) {
      if (parseInt(answers[key]) === all[index].ans) {
        count++;
      }
      index++;
    }

    const entry = await login.findOne({ userName: userName });

    if (entry) {
      entry.timeStamps.push({ time: new Date(), score: count });
      await entry.save();

      console.log('Timestamp added successfully');
    } else {
      console.log('User not found');
    }

    const timeStamps = entry ? entry.timeStamps : [];
    res.render("home", { user: userName, timeStamps });
  }

async function EvaluateAnswerSql(req, res) {
    const answers = req.body;
    const data = await sql.find({});
    const all = data.map((item) => ({
      ans: item.ans,
    }));
    const userName = req.params.user.replace(':', '');
    let index = 0;
    let count = 0;
    for (let key in answers) {
      if (parseInt(answers[key]) === all[index].ans) {
        count++;
      }
      index++;
    }

    const entry = await login.findOne({ userName: userName });

    if (entry) {
      entry.timeStamps.push({ time: new Date(), score: count });
      await entry.save();

      console.log('Timestamp added successfully');
    } else {
      console.log('User not found');
    }

    const timeStamps = entry ? entry.timeStamps : [];
    res.render("home", { user: userName, timeStamps });
  }

  module.exports = { handleQuizNode, handleQuizMongo, handleQuizSql, EvaluateAnswerNode, EvaluateAnswerMongo, EvaluateAnswerSql };
