const { body } = require("express-validator");

// models
const User = require("../models/User");

const signupDto = [
  // username
  body("username")
    .exists({ checkFalsy: false })
    .withMessage("Username is required")
    .isLength({ min: 2, max: 30 })
    .withMessage("Username: minimum 2 characters, maximum 30 characters")
    .custom((username) => {
      return User.findOne({ username }).then((user) => {
        if (user) return Promise.reject("Username already in use");
      });
    }),
  // password
  body("password")
    .exists({ checkFalsy: false })
    .withMessage("Password is required"),
  // confirm password
  body("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
];

const signinDto = [
  // username
  body("username")
    .exists({ checkFalsy: false })
    .withMessage("Username is required"),
  body("password")
    .exists({ checkFalsy: false })
    .withMessage("Password is required"),
];

module.exports = { signinDto, signupDto };
