const { body } = require("express-validator");

const genderDto = [
  // gender
  body("gender")
    .exists({ checkFalsy: false })
    .withMessage("Gender name is required"),
];

module.exports = genderDto;
