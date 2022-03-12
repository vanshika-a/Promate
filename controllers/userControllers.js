const fs = require("fs");
const User = require("../models/userModel");


exports.getApp = function (req,res) {
    try{
        console.log(req.body);
        fs.readFile(
            `${__dirname}/../views/index.ejs`,
            "utf-8",
            (err, data) => {
              res.status(200).send(data);
        });
    }
    catch(err){
        console.log(err);
    }
};

exports.register = async function (req, res){
    try{
        console.log(req.body);

        fs.readFile(
            `${__dirname}/../views/register.ejs`,
            "utf-8",
            (err, data) => {
                res.status(200).send(data);
            // console.log(err);
        });
    }
    catch(err){
        console.log(err);
    }
}


exports.submit = async function(req, res){
    try{
        console.log(req.body);
        console.log(req.data);

        const newUser = new User({
            name : req.body.name,
            linkedIn: req.body.linkedIn,
            git:req.body.git,
            email:req.body.email,
            college:req.body.college,
            techSkill:req.body.techSkills,
            note:req.body.note,
            hackathon:req.body.hackathon
        });
        const register = await newUser.save();

        fs.readFile(
            `${__dirname}/../views/index.ejs`,
            "utf-8",
            (err, data) => {
              res.status(200).send(data);
            }
        );
    }
    catch(error){
        res.status(400).json({
            status: "An error occured",
            message: error,
          });
          console.log("Error 💣💣" + error);
    }
}

exports.getAbout = function (req, res){
    try{
        console.log(req.body);
        fs.readFile(
            `${__dirname}/../views/about.ejs`,
            "utf-8",
            (err, data) => {
              res.status(200).send(data);
        });
    }
    catch(err){
        console.log(err);
    }
}

exports.getHome = function (req, res){
    try{
        console.log(req.body);
        fs.readFile(
            `${__dirname}/../views/home.ejs`,
            "utf-8",
            (err, data) => {
              res.status(200).send(data);
        });
    }
    catch(err){
        console.log(err);
    }
}

exports.findPartner = function(req, res){
    console.log(req.body);
    try{
        
        User.find({}, function(err, foundUsers){
            res.render("search", {currentUsers : foundUsers});
        });

    }
    catch(err){
        console.log(err);
    }
}

exports.searchSkill = function (req, res){
    const skillReq = req.body.skillReq;
    const userArray = [];
    User.find({}, function(err, foundUsers){
        foundUsers.forEach(user =>{
            if(user.techSkill.includes(skillReq)){
                userArray.push(user);
            }
        });
        res.render("search", {currentUsers : userArray});
    });
}

exports.vision = function(req, res){
    try{
        console.log(req.body);
        fs.readFile(
            `${__dirname}/../views/vision.ejs`,
            "utf-8",
            (err, data) => {
              res.status(200).send(data);
        });
    }
    catch(err){
        console.log(err);
    }
}