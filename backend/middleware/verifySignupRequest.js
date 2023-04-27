const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const verifySignupRequest = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  // validate the name
  if (!name) {
    res.status(400);
    throw new Error("name is not provided");
  }
  // validate the email
  if (!email) {
    res.status(400);
    throw new Error("email is not provided");
  }
  // validate the password
  if (!password) {
    res.status(400);
    throw new Error("password is not provided");
  }
  // user is already register
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(401);
    throw new Error("Email already exist");
  }
  next();
});

module.exports = verifySignupRequest;
