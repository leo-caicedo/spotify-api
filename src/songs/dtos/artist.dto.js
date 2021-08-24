const { body } = require("express-validator");

const artistDto = [
  // artist
  body("artist")
    .exists({ checkFalsy: false })
    .withMessage("Artist name is required")
    .isLength({ max: 30 })
    .withMessage("The artist name must have a maximum of 30 characters"),
];

module.exports = artistDto;
