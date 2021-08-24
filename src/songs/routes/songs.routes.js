const { Router } = require("express");

const router = Router();
// dto
const songDto = require("../dtos/song.dto");
// middleware
const validationSchema = require("../../middleware/validate-schema");
// services
const SongServices = require("../services/songs.services");
const songServices = new SongServices();

router.get("/", songServices.getSongs);
router.get("/:id", songServices.getSong);
router.post("/", songDto, validationSchema, songServices.createSong);
router.put("/:id", songServices.updateSong);
router.delete("/:id", songServices.deleteSong);

module.exports = router;
