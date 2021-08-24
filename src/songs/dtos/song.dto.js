const { body } = require("express-validator");

const songDto = [
  // title
  body("title").exists({ checkFalsy: false }).withMessage("Title is required"),
  // artist
  body("artist")
    .exists({ checkFalsy: false })
    .withMessage("Artist is required"),
  // duration
  body("duration")
    .isInt({ min: 0 })
    .withMessage("The song must have a valid duration time"),
];

module.exports = songDto;
