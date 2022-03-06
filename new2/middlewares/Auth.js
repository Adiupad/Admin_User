const { JWT_SECRET_KEY } = require("../config");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const Auth = async (req, res, next) => {
  try {
    const token = req.headers.access_token;
    const verified = jwt.verify(token, JWT_SECRET_KEY);
    console.log(verified, token);
    if (verified) {
      const findAdmin = await User.findOne({ isAdmin: true, token });
      if (findAdmin) {
        next();
      }
      else{
        return res
        .status(401)
        .send({ status: 401, message: "Only admins can register", data: [] });
      }
    } else {
      // Access Denied
      return res
        .status(401)
        .send({ status: 401, message: error.message, data: [] });
    }
  } catch (error) {
    // Access Denied
    return res
      .status(401)
      .send({ status: 401, message: error.message, data: [] });
  }
};

module.exports = Auth;
