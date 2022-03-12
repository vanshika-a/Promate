const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

router.route("/").get(userController.getApp);
router.route("/register").get(userController.register);
router.route("/submit").post(userController.submit);
router.route("/home").get(userController.getHome);
router.route("/about").get(userController.getAbout);
router.route("/search").get(userController.findPartner);
router.route("/vision").get(userController.vision);
router.route("/searchSkill").post(userController.searchSkill);

module.exports = router;