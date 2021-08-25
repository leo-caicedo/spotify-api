const { Router } = require("express");

const router = Router();
// dto
const playlistDto = require("../dtos/playlist.dto");
// middleware
const validationSchema = require("../../middleware/validate-schema");
const verifyToken = require("../../middleware/jwt");
// services
const PlaylistServices = require("../services/playlists.services");
const playlistServices = new PlaylistServices();

router.get("/", playlistServices.getPlaylists);
router.get("/:id", playlistServices.getPlaylist);
router.post(
  "/",
  verifyToken,
  playlistDto,
  validationSchema,
  playlistServices.createPlaylist
);
router.put("/:id", verifyToken, playlistServices.updatePlaylist);
router.delete("/:id", verifyToken, playlistServices.deletePlaylist);

module.exports = router;
