const { body } = require("express-validator");

const albumDto = [
  // album
  body("album")
    .exists({ checkFalsy: false })
    .withMessage("Album name is required"),
  // artist
  body("artist")
    .exists({ checkFalsy: false })
    .withMessage("Artist is required"),
];

module.exports = albumDto;
