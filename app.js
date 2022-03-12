const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Router = require("./router/router");
const User = require("./models/userModel");
require("dotenv").config();

const app = express();
app.set('view engine', 'ejs');
const temp = bodyParser.urlencoded({extended: true});
app.use(temp);
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/", Router);

const port = 3000||process.env.PORT ;

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to DB!");
    })
    .catch((err) => {
        console.log(err);
    }
);

var query_string = require('querystring');

app.listen(port, console.log(`Server started on port ${port}`))

module.exports = app;

app.get("/register", function(req, res){
    res.render("register");
})

app.post("/submit", async function(req, res, next){
    console.log(req.body);
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
    
    res.redirect("/");
})