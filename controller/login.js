const { login } = require("../models/quiz");

async function handleSignUp(req, res) {
  const data = new login(req.body);
  await data.save();

  const timeStamps = data.timeStamps;
  res.render("home", { user: data.userName, timeStamps }, null);
}

async function handleLogin(req, res) {
  try {
    const data = await login.findOne({ email: req.body.email });

    if (data.password === req.body.password) {
      const timeStamps = data ? data.timeStamps : [];
      res.render("home", { user: data.userName, timeStamps });
    } else {
      res.send("Wrong password entered");
    }
  } catch {
    res.send("Wrong Email entered");
  }
}

module.exports = { handleLogin, handleSignUp };
