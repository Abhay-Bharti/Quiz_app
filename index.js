const express = require('express');
const path = require('path');
const app = express();
const { handleQuestion } = require('./controller/quiz')
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/views")));
app.use(express.urlencoded({ extended: false}));

app.get("/quiz", handleQuestion );

app.listen(PORT, ()=> {
    console.log(`Server Started at Port ${PORT}`)
})