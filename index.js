const express = require("express");
const path = require("path");
const app = express();
const { handleQuizNode, handleQuizMongo, handleQuizSql, EvaluateAnswerMongo, EvaluateAnswerNode , EvaluateAnswerSql} = require("./controller/quiz");
const { handleLogin, handleSignUp } = require("./controller/login");
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/views")));
app.use(express.urlencoded({ extended: false }));

app.get("/quiz/Node/:user", handleQuizNode);
app.get("/quiz/Mongo/:user", handleQuizMongo);
app.get("/quiz/Sql/:user", handleQuizSql);

app.post("/home/nodes/:user", EvaluateAnswerNode);
app.post("/home/mongos/:user", EvaluateAnswerMongo);
app.post("/home/sqls/:user", EvaluateAnswerSql);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.post("/login", handleLogin);

app.post("/signUp", handleSignUp);

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
