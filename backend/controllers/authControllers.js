
// @desc user login
// @route POST "/api/v1/auth/login"
// @access public


const signin = (req, res) => {
  res.status(201);
  res.json("login success");
};

// @desc register user
// @route POST "/api/v1/auth/register"
// @access public

const signup = (req, res) => {
  res.status(201);
  res.json("signup success");
};


module.exports = {signin, signup}