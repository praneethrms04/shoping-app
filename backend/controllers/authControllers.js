const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// @desc user login
// @route POST "/api/v1/auth/login"
// @access public

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (user && passwordIsValid) {
    const accessToken = jwt.sign(
      { id: user.userId },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({
      name: user.name,
      email: user.email,
      accessToken: accessToken,
    });
  } else {
    res.status(401);
    throw new Error("email or password not valid");
  }
});

// @desc register user
// @route POST "/api/v1/auth/register"
// @access public

const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  let hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).json("User data is not valid");
  }
});

module.exports = { signin, signup };
