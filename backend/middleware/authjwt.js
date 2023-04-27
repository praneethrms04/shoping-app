const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler((req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(401);
    throw new Error("No token provided");
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("Invlalid user details");
    }
    req.userId = decoded.id;
    // console.log(req.userId)
    next();
  });
});

module.exports = verifyToken;
