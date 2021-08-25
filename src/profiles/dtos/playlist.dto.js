const { body } = require("express-validator");

const playlistDto = [
  // playlist, user, songs
  body("playlist")
    .exists({ checkFalsy: false })
    .withMessage("Playlist name is required"),
  // user
  body("user").exists({ checkFalsy: false }).withMessage("User is required"),
  // songs
  body("songs").exists("songs").withMessage("Songs is required"),
];

module.exports = playlistDto;
