const express = require("express");
const router = express.Router();
const { signin, signup } = require("../controllers/authControllers");

router.post("/login", signin);

router.post("/register", signup);

module.exports = router;
