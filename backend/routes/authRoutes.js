const express = require("express");
const router = express.Router();
const { signin, signup } = require("../controllers/authControllers");
const verifySignupRequest = require("../middleware/verifySignupRequest");
const verifySigninRequest = require("../middleware/verifySigninRequest");

router.post("/login", [verifySigninRequest], signin);

router.post("/register", [verifySignupRequest], signup);

module.exports = router;
