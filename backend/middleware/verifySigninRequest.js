const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const verifySigninRequest = asyncHandler(async (req, res, next) => {

  const { email, password } = req.body;
  // validate the email
  if (!email) {
    res.status(400);
    throw new Error("Email does not exist");
  }

  // validate the password
  if (!password) {
    res.status(400);
    throw new Error("Password does not exist");
  }

  let user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid Email address");
  }
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    res.status(400);
    throw new Error("Invalid password");
  }
  next();
});

module.exports = verifySigninRequest;
